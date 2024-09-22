import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import NewTask from './NewTask';

describe('<NewTask />', () => {
  let mockAddTask;
  let mockClose;
  let wrapper;

  beforeEach(() => {
    mockAddTask = jest.fn();
    mockClose = jest.fn();
    wrapper = render(<NewTask addTask={mockAddTask} onClose={mockClose} />);
  });

  it('should render the new task form', () => {
    const { getByLabelText } = wrapper;
    expect(getByLabelText(/assigned to/i)).toBeInTheDocument();
    expect(getByLabelText(/comments/i)).toBeInTheDocument();
  });

  it('should call addTask on form submit', () => {
    const newTask = { assignedTo: "New User", status: "Not Started", dueDate: "2024-10-20", priority: "Normal", comments: "New task added" };
    const { getByLabelText, getByRole } = wrapper;

    fireEvent.change(getByLabelText(/assigned to/i), { target: { value: newTask.assignedTo } });
    fireEvent.change(getByLabelText(/comments/i), { target: { value: newTask.comments } });

    fireEvent.submit(getByRole('form')); // Assuming you have a form role
    expect(mockAddTask).toHaveBeenCalledWith(newTask);
  });

  it('should call onClose when cancel button is clicked', () => {
    const { getByText } = wrapper;
    fireEvent.click(getByText(/cancel/i));
    expect(mockClose).toHaveBeenCalled();
  });
});
