import React, { useState } from "react";
import "../styles/TaskList.css";

const PAGE_SIZE = 2;

function TaskList({ tasks, openModal }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const totalPages = Math.ceil(tasks.length / PAGE_SIZE);
  const filteredTasks = tasks.filter((task) =>
    task.assignedTo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentTasks = filteredTasks.slice(startIndex, startIndex + PAGE_SIZE);

  const goToFirstPage = () => setCurrentPage(1);
  const goToPrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToLastPage = () => setCurrentPage(totalPages);

  return (
    <div className="task-list">
      <header className="task-header">
        <h2>Tasks</h2>
        <div className="task-actions">
          <input
            type="text"
            placeholder="Search by user..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-new" onClick={() => openModal('new')}>New Task</button>
          <button className="btn btn-refresh">Refresh</button>
        </div>
      </header>

      <table className="task-table">
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
          {currentTasks.map((task) => (
            <tr key={task.id}>
              <td>{task.assignedTo}</td>
              <td>{task.status}</td>
              <td>{task.dueDate}</td>
              <td>{task.priority}</td>
              <td>{task.comments}</td>
              <td>
                <div className="dropdown">
                  <button className="dropdown-btn">⋮</button>
                  <div className="dropdown-content">
                    <button onClick={() => openModal('edit', task)}>Edit</button>
                    <button onClick={() => openModal('delete', task)}>Delete</button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button className="btn" onClick={goToFirstPage} disabled={currentPage === 1}>First</button>
        <button className="btn" onClick={goToPrevPage} disabled={currentPage === 1}>Prev</button>
        <span className="page-info">Page {currentPage} of {totalPages}</span>
        <button className="btn" onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
        <button className="btn" onClick={goToLastPage} disabled={currentPage === totalPages}>Last</button>
      </div>
    </div>
  );
}

export default TaskList;
