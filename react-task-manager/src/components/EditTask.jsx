import React, { useState, useEffect } from "react";
import "../styles/Modal.css";

function EditTask({ task, updateTask, onClose }) {
  const [editedTask, setEditedTask] = useState(task);

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    updateTask(editedTask);
    onClose();
  };

  if (!task) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Edit Task</h2>
        <label>Assigned To:
          <input type="text" name="assignedTo" value={editedTask.assignedTo} onChange={handleChange} required />
        </label>
        <label>Status:
          <select name="status" value={editedTask.status} onChange={handleChange}>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </label>
        <label>Due Date:
          <input type="date" name="dueDate" value={editedTask.dueDate} onChange={handleChange} />
        </label>
        <label>Priority:
          <select name="priority" value={editedTask.priority} onChange={handleChange}>
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </label>
        <label>Comments:
          <input type="text" name="comments" value={editedTask.comments} onChange={handleChange} />
        </label>
        <button onClick={handleSubmit}>Save</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default EditTask;
