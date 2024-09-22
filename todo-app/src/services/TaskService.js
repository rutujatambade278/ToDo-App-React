let tasks = [
    { id: 1, title: 'Learn React', completed: false },
    { id: 2, title: 'Build To-Do App', completed: false },
    // Add more initial data here if needed
  ];
  
  export const getTasks = (page, size) => {
    const startIndex = (page - 1) * size;
    return tasks.slice(startIndex, startIndex + size);
  };
  
  export const addTask = (task) => {
    task.id = tasks.length + 1;
    tasks.push(task);
  };
  
  export const updateTask = (updatedTask) => {
    const index = tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) tasks[index] = updatedTask;
  };
  
  export const deleteTask = (id) => {
    tasks = tasks.filter(task => task.id !== id);
  };
  