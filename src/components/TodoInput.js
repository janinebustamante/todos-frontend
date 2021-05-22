import { Container, FormControl, Button, InputGroup } from "react-bootstrap";

export default function TodoInput({ todoInput, setTodoInput, onAdd }) {
  // console.log(todoInput);
  return (
    <Container>
      <InputGroup className="mb-3 w-50 m-auto">
        <FormControl
          placeholder="todos"
          aria-label="todos"
          aria-describedby="basic-addon2"
          // aria-label="todos"
          // aria-describedby="basic-addon1"
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <InputGroup.Append>
          <Button variant="info" onClick={() => onAdd(todoInput)}>
            Add
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </Container>
  );
}
