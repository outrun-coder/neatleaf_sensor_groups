import { Dispatch, SetStateAction } from "react";
import { Form } from "react-bootstrap";

interface controlProps {
  setSensorFilter: Dispatch<SetStateAction<string>>;
  setShowNomOnly: Dispatch<SetStateAction<boolean>>;
}

const Controls = (props: controlProps) => {
  const {setSensorFilter, setShowNomOnly} = props;

  return (
    <Form>
      <Form.Group style={{display: 'Flex', flexDirection: 'column', padding: '20px 60px'}}>
        <Form.Label style={{marginBottom: '20px'}}>
          Controls
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Search..."
          style={{marginBottom: '20px'}}
          onChange={(e) => setSensorFilter(e.target.value)}/>
        <Form.Check
          type="checkbox"
          label="Only show nominal measurments"
          style={{marginBottom: '20px'}}
          onChange={(e) => setShowNomOnly(e.target.checked)}/>
      </Form.Group>
    </Form>
  );
}

export default Controls;