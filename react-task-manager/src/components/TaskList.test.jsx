import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskList from './TaskList';

describe('<TaskList />', () => {
  const tasks = [
    { id: 1, assignedTo: "Ajinkya", status: "Completed", dueDate: "2024-10-12", priority: "Low", comments: "This task is good" },
    { id: 2, assignedTo: "Mansi", status: "In Progress", dueDate: "2024-09-14", priority: "High", comments: "This task is in progress" },
  ];

  it('should render the correct number of tasks', () => {
    const { getAllByRole } = render(<TaskList tasks={tasks} openModal={() => {}} />);
    expect(getAllByRole('row')).toHaveLength(2); // Adjust based on your table structure
  });

  it('should filter tasks based on search term', () => {
    const { getByPlaceholderText, getAllByRole } = render(<TaskList tasks={tasks} openModal={() => {}} />);
    fireEvent.change(getByPlaceholderText(/search/i), { target: { value: 'Ajinkya' } });
    expect(getAllByRole('row')).toHaveLength(1); // Only Ajinkya's task should be visible
  });

  it('should paginate tasks correctly', () => {
    const longTaskList = [
      ...tasks,
      { id: 3, assignedTo: "Ravi", status: "Not Started", dueDate: "2024-08-18", priority: "Low", comments: "Not started yet" },
    ];
    const { getByTestId } = render(<TaskList tasks={longTaskList} openModal={() => {}} />);
    
    // Assuming your pagination controls are set up correctly
    // Simulate changing to the second page (replace with actual method if needed)
    fireEvent.click(getByTestId('next-page-button')); // Replace with actual button
    expect(getByTestId('task-list')).toHaveLength(1); // Should show only one task on the second page
  });

  it('should call openModal when edit or delete is clicked', () => {
    const openModalStub = jest.fn();
    const { getAllByRole } = render(<TaskList tasks={tasks} openModal={openModalStub} />);
    
    fireEvent.click(getAllByRole('button')[0]); // Click edit button
    expect(openModalStub).toHaveBeenCalled();
  });
});
