import React, { useState } from 'react';
import TasksList from './components/TaskForm';
import TaskForm from './components/TaskList';
import DeleteConfirmation from './components/DeleteConfirmation';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      assignedTo: 'User1',
      status: 'Completed',
      dueDate: '2024-09-21',
      priority: 'High',
      comments: 'Task completed well'
    },
    {
      assignedTo: 'User2',
      status: 'In Progress',
      dueDate: '2024-09-25',
      priority: 'Low',
      comments: 'Working on it'
    }
  ]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showDelete, setShowDelete] = useState(false);

  const handleEdit = (task) => {
    setSelectedTask(task);
  };

  const handleSave = (task) => {
    if (selectedTask) {
      // Update task
      const updatedTasks = tasks.map((t) =>
        t === selectedTask ? task : t
      );
      setTasks(updatedTasks);
    } else {
      // Add new task
      setTasks([...tasks, task]);
    }
    setSelectedTask(null);
  };

  const handleCancel = () => {
    setSelectedTask(null);
  };

  const handleDelete = () => {
    setTasks(tasks.filter((t) => t !== selectedTask));
    setSelectedTask(null);
    setShowDelete(false);
  };

  return (
    <div className="container">
      <TasksList tasks={tasks} handleEdit={handleEdit} handleDelete={() => setShowDelete(true)} />
      {selectedTask && (
        <TaskForm selectedTask={selectedTask} handleSave={handleSave} handleCancel={handleCancel} />
      )}
      <DeleteConfirmation
        show={showDelete}
        handleClose={() => setShowDelete(false)}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default App;
