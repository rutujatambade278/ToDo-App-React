import React, { useState } from "react";
import "../styles/Modal.css";

function NewTask({ addTask, onClose }) {
  const [newTask, setNewTask] = useState({ assignedTo: "", status: "Not Started", dueDate: "", priority: "Low", comments: "" });

  const handleChange = (e) => {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    addTask(newTask);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>New Task</h2>
        <label>Assigned To:
          <input type="text" name="assignedTo" value={newTask.assignedTo} onChange={handleChange} required />
        </label>
        <label>Status:
          <select name="status" value={newTask.status} onChange={handleChange}>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <label>Due Date:
          <input type="date" name="dueDate" value={newTask.dueDate} onChange={handleChange} />
        </label>
        <label>Priority:
          <select name="priority" value={newTask.priority} onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </label>
        <label>Comments:
          <input type="text" name="comments" value={newTask.comments} onChange={handleChange} />
        </label>
        <button onClick={handleSubmit}>Add Task</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default NewTask;
