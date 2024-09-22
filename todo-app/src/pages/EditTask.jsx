import React, { useState } from 'react';
import TaskForm from '../components/TaskForm';
import { updateTask } from '../services/TaskService';

const EditTask = ({ selectedTask }) => {
  const handleSave = (task) => {
    updateTask(task);
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <TaskForm task={selectedTask} onSave={handleSave} />
    </div>
  );
};

export default EditTask;
