import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EditTask from './EditTask';

describe('<EditTask />', () => {
  const mockTask = {
    id: 1,
    assignedTo: 'Ajinkya',
    status: 'Completed',
    dueDate: '2024-10-12',
    priority: 'Low',
    comments: 'This task is good',
  };
  const mockUpdateTask = jest.fn();
  const mockClose = jest.fn();

  it('should render the task details', () => {
    const { getByLabelText } = render(
      <EditTask task={mockTask} updateTask={mockUpdateTask} onClose={mockClose} />
    );

    expect(getByLabelText(/assigned to/i).value).toBe(mockTask.assignedTo);
    expect(getByLabelText(/comments/i).value).toBe(mockTask.comments);
  });

  it('should call updateTask on form submit', () => {
    const { getByRole } = render(
      <EditTask task={mockTask} updateTask={mockUpdateTask} onClose={mockClose} />
    );

    fireEvent.submit(getByRole('form')); // Assuming you have a form role
    expect(mockUpdateTask).toHaveBeenCalledWith(mockTask);
  });

  it('should call onClose when cancel button is clicked', () => {
    const { getByText } = render(
      <EditTask task={mockTask} updateTask={mockUpdateTask} onClose={mockClose} />
    );

    fireEvent.click(getByText(/cancel/i));
    expect(mockClose).toHaveBeenCalled();
  });
});
