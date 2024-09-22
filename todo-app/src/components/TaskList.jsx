import React, { useState } from 'react';
import { Button, Table, Form } from 'react-bootstrap';

const TasksList = ({ tasks, handleEdit, handleDelete }) => {
  return (
    <div>
      <h3>Tasks</h3>
      <Button variant="primary" onClick={() => handleEdit(null)}>New Task</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Assigned To</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Comments</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, idx) => (
            <tr key={idx}>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.comments}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(task)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(task)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TasksList;
