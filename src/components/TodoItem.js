import { Container, Card, Button } from "react-bootstrap";
import moment from "moment";

export default function TodoItem({ todo, onDelete }) {
  console.log(todo);

  const { text, createdAt } = todo;
  console.log(text);

  return (
    <Container>
      <Card className="w-50 m-auto">
        <Card.Body>
          <Card.Title>{text}</Card.Title>
          <Card.Text>{moment(createdAt).format("MMMM DD, YYYY")}</Card.Text>
          <Button variant="outline-danger" onClick={() => onDelete(todo._id)}>
            Delete
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}
