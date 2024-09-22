import React, { useState } from "react";
import TaskList from "./components/TaskList";
import EditTask from "./components/EditTask";
import DeleteTask from "./components/DeleteTask";
import NewTask from "./components/NewTask";
import "./App.css";

const initialTasks = [
  { id: 1, assignedTo: "Ajinkya", status: "Completed", dueDate: "2024-10-12", priority: "Low", comments: "This task is good" },
  { id: 2, assignedTo: "Mansi", status: "In Progress", dueDate: "2024-09-14", priority: "High", comments: "This task is in progress" },
  { id: 3, assignedTo: "Ravi", status: "Not Started", dueDate: "2024-08-18", priority: "Low", comments: "Not started yet" },
  { id: 4, assignedTo: "Aditya", status: "In Progress", dueDate: "2024-06-12", priority: "Normal", comments: "This task is good" },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [modalState, setModalState] = useState({ edit: false, delete: false, new: false });
  const [selectedTask, setSelectedTask] = useState(null);

  const openModal = (type, task) => {
    setSelectedTask(task);
    setModalState((prev) => ({ ...prev, [type]: true }));
  };

  const closeModal = (type) => {
    setModalState((prev) => ({ ...prev, [type]: false }));
    setSelectedTask(null);
  };

  const updateTask = (updatedTask) => {
    setTasks((prev) => prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    closeModal('edit');
  };

  const deleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
    closeModal('delete');
  };

  const addTask = (newTask) => {
    setTasks((prev) => [...prev, { ...newTask, id: Date.now() }]);
    closeModal('new');
  };

  return (
    <div className="app">
      <h1>Task Management</h1>
      <TaskList tasks={tasks} openModal={openModal} />

      {modalState.edit && selectedTask && (
        <EditTask task={selectedTask} updateTask={updateTask} onClose={() => closeModal('edit')} />
      )}

      {modalState.delete && selectedTask && (
        <DeleteTask task={selectedTask} deleteTask={deleteTask} onClose={() => closeModal('delete')} />
      )}

      {modalState.new && (
        <NewTask addTask={addTask} onClose={() => closeModal('new')} />
      )}
    </div>
  );
}

export default App;
