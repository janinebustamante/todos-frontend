import { Container, Button } from "react-bootstrap";

export default function TodoFilter({ onFilterSelect }) {
  return (
    <Container className="mb-3">
      <Button variant="outline-primary" onClick={() => onFilterSelect("all")}>
        All
      </Button>
      <Button
        variant="outline-success"
        onClick={() => onFilterSelect("complete")}
      >
        Complete
      </Button>
      <Button
        variant="outline-warning"
        onClick={() => onFilterSelect("incomplete")}
      >
        Incomplete
      </Button>
    </Container>
  );
}
