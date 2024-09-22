import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

const TaskForm = ({ selectedTask, handleSave, handleCancel }) => {
  const [task, setTask] = useState({
    assignedTo: '',
    status: '',
    dueDate: '',
    priority: '',
    comments: ''
  });

  useEffect(() => {
    if (selectedTask) {
      setTask(selectedTask);
    }
  }, [selectedTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(task);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="assignedTo">
        <Form.Label>Assigned To</Form.Label>
        <Form.Control
          type="text"
          name="assignedTo"
          value={task.assignedTo}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="status">
        <Form.Label>Status</Form.Label>
        <Form.Control
          type="text"
          name="status"
          value={task.status}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="dueDate">
        <Form.Label>Due Date</Form.Label>
        <Form.Control
          type="date"
          name="dueDate"
          value={task.dueDate}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="priority">
        <Form.Label>Priority</Form.Label>
        <Form.Control
          type="text"
          name="priority"
          value={task.priority}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="comments">
        <Form.Label>Comments</Form.Label>
        <Form.Control
          as="textarea"
          name="comments"
          value={task.comments}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Save
      </Button>{' '}
      <Button variant="secondary" onClick={handleCancel}>
        Cancel
      </Button>
    </Form>
  );
};

export default TaskForm;
