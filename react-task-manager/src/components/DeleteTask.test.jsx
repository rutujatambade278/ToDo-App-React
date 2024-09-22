import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DeleteTask from './DeleteTask';

describe('<DeleteTask />', () => {
  const mockTask = { id: 1, assignedTo: 'Ajinkya' };
  const mockDeleteTask = jest.fn();
  const mockClose = jest.fn();

  it('should render the delete confirmation message', () => {
    const { getByText } = render(
      <DeleteTask task={mockTask} deleteTask={mockDeleteTask} onClose={mockClose} />
    );

    expect(getByText(/are you sure you want to delete this task\?/i)).toBeInTheDocument();
  });

  it('should call deleteTask when confirm button is clicked', () => {
    const { getByText } = render(
      <DeleteTask task={mockTask} deleteTask={mockDeleteTask} onClose={mockClose} />
    );

    fireEvent.click(getByText(/confirm/i));
    expect(mockDeleteTask).toHaveBeenCalledWith(mockTask.id);
  });

  it('should call onClose when cancel button is clicked', () => {
    const { getByText } = render(
      <DeleteTask task={mockTask} deleteTask={mockDeleteTask} onClose={mockClose} />
    );

    fireEvent.click(getByText(/cancel/i));
    expect(mockClose).toHaveBeenCalled();
  });
});
