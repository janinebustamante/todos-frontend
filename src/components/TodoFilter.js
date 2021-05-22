import { Container, Button, Dropdown, DropdownButton } from "react-bootstrap";

export default function TodoFilter({ onFilterSelect }) {
  return (
    // <DropdownButton id="dropdown-item-button" title="Choose">
    //   <Dropdown.Item as="button" onClick={() => onFilterSelect("all")}>
    //     All
    //   </Dropdown.Item>
    //   <Dropdown.Item as="button" onClick={() => onFilterSelect("complete")}>
    //     Complete
    //   </Dropdown.Item>
    //   <Dropdown.Item as="button" onClick={() => onFilterSelect("incomplete")}>
    //     Incomplete
    //   </Dropdown.Item>
    // </DropdownButton>

    <div className="mb-3 text-center">
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
    </div>
  );
}
