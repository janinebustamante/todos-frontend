import { useState } from "react";
import { Container, Card, Form, Button } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import appHelper from "../apphelper";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  function login(e) {
    e.preventDefault();

    fetch(`${appHelper.baseUrl}/api/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.err) {
          alert(data.err);
        } else {
          localStorage.setItem("token", data.accessToken);
          setRedirect(true);
        }
      });
  }

  return (
    <Container>
      {redirect === true ? (
        <Redirect to="/todos" />
      ) : (
        <Card>
          <Card.Header>
            <h3>Login</h3>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={(e) => login(e)}>
              <Form.Group>
                <Form.Label>Username:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="user"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password:</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>
              <Button type="submit">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}
