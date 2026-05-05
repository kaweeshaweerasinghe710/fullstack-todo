let todos = [];

export const todoService = {
  // Fetch all todos
  getAll: async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return [...todos];
  },

  // Create a new todo
  create: async (todoData) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const newItem = {
      ...todoData,
      _id: Date.now().toString(),
      done: false,
      createdAt: new Date().toISOString()
    };
    todos = [newItem, ...todos];
    return newItem;
  },

  // Toggle done status
  toggleDone: async (id) => {
    const todoIndex = todos.findIndex(t => t._id === id);
    if (todoIndex !== -1) {
      todos[todoIndex] = { ...todos[todoIndex], done: !todos[todoIndex].done };
      return todos[todoIndex];
    }
    return null;
  },

  // Remove a todo
  remove: async (id) => {
    todos = todos.filter(t => t._id !== id);
  }
};