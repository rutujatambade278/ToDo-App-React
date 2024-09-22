import React from 'react';
import TaskForm from '../components/TaskForm';
import { addTask } from '../services/TaskService';

const AddTask = () => {
  const handleSave = (task) => {
    addTask(task);  // Save the task
  };

  return (
    <div>
      <h2>Add Task</h2>
      <TaskForm handleSave={handleSave} />  {/* Pass handleSave as a prop */}
    </div>
  );
};

export default AddTask;
