import { Form } from "react-bootstrap";


const Controls = () => {
  return (
    <Form>
      <Form.Group style={{display: 'Flex', flexDirection: 'column', padding: '20px 60px'}}>
        <Form.Label style={{marginBottom: '20px'}}>
          Controls
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Search..."
          style={{marginBottom: '20px'}}/>
        <Form.Check
          type="checkbox"
          label="Only show nominal measurments"
          style={{marginBottom: '20px'}}/>
      </Form.Group>
    </Form>
  );
}

export default Controls;