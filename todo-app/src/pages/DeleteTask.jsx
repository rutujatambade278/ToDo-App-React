import React from 'react';
import { deleteTask } from '../services/TaskService';

const DeleteTask = ({ taskId }) => {
  const handleDelete = () => {
    deleteTask(taskId);
    alert('Task deleted');
  };

  return (
    <div>
      <h2>Delete Task</h2>
      <button onClick={handleDelete}>Confirm Delete</button>
    </div>
  );
};

export default DeleteTask;
