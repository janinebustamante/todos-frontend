import React, { useState, useEffect } from "react";

import appHelper from "../apphelper";

import Banner from "../components/Banner";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import TodoFilter from "../components/TodoFilter";
import Footer from "../components/Footer";

export default function TodoPage() {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  const [filterSelected, setFilterSelected] = useState("all");
  console.log(filterSelected);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  console.log(filteredTodos);
  const [todoInput, setTodoInput] = useState("");
  console.log(todoInput);

  //get all todos
  useEffect(() => {
    fetch(`${appHelper.baseUrl}/api/todos`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTodos(data);
      });
  }, []);

  //select filter (all, complete, incomplete)
  const handleOnFilterSelect = (newFilter) => {
    setFilterSelected(newFilter);
  };

  //filter todos based from filter type selected
  useEffect(() => {
    if (filterSelected === "all") {
      setFilteredTodos(todos);
    } else if (filterSelected === "complete") {
      const updatedTodos = todos.filter((todo) => todo.isComplete === true);
      setFilteredTodos(updatedTodos);
    } else if (filterSelected === "incomplete") {
      const updatedTodos = todos.filter((todo) => todo.isComplete === false);
      setFilteredTodos(updatedTodos);
    }
  }, [todos, filterSelected, filteredTodos]);

  //add a todo
  const onAdd = async (text) => {
    const res = await fetch(`${appHelper.baseUrl}/api/todos`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (data) {
      setTodos([...todos, data]);
      setTodoInput("");
    }
  };

  //delete a todo
  const onDelete = async (todoId) => {
    const res = await fetch(`${appHelper.baseUrl}/api/todos/${todoId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const data = await res.json();
    console.log(data);

    if (data) {
      const updatedTodos = todos.filter((todo) => todo._id !== todoId);
      setTodos(updatedTodos);
    }
  };

  return (
    <React.Fragment>
      <Banner />
      <TodoInput
        onAdd={onAdd}
        todoInput={todoInput}
        setTodoInput={setTodoInput}
      />
      <TodoFilter onFilterSelect={handleOnFilterSelect} />
      <TodoList todos={filteredTodos} onDelete={onDelete} />
      <Footer />
    </React.Fragment>
  );
}
