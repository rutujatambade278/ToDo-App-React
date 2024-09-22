import React from "react";
import "../styles/Modal.css";

function DeleteTask({ task, deleteTask, onClose }) {
  const handleDelete = () => {
    deleteTask(task.id);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Delete Task</h2>
        <p>Are you sure you want to delete the task assigned to "{task.assignedTo}"?</p>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}

export default DeleteTask;
