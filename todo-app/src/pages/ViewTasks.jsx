import React, { useState } from 'react';
import TaskList from '../components/TaskList';
import PaginationControls from '../components/PaginationControls';
import { getTasks } from '../services/TaskService';

const ViewTasks = () => {
  const allTasks = getAllTasks(); // Fetch all tasks from service
  const tasks = getTasks(page, 5); // Fetch tasks per page
  const totalPages = Math.ceil(allTasks.length / 5);


  const handlePageChange = (newPage) => setPage(newPage);

  return (
    <div>
      <h2>View Tasks</h2>
      <TaskList tasks={tasks} />
      <PaginationControls page={page} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default ViewTasks;
