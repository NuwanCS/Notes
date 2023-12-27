import { Form } from 'react-bootstrap';
import { MultiSelectDropdown } from './utils';

export function NoteForm() {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Tags</Form.Label>
        <MultiSelectDropdown />
      </Form.Group>
    </Form>
  );
}
