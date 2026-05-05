const STORAGE_KEY = 'todos_data';

const getStoredTodos = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

const saveTodos = (todos) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
};

export const todoService = {
  // Fetch all todos
  getAll: async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return getStoredTodos();
  },

  // Create a new todo
  create: async (todoData) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const todos = getStoredTodos();
    const newItem = {
      ...todoData,
      _id: Date.now().toString(),
      done: false,
      createdAt: new Date().toISOString()
    };
    saveTodos([newItem, ...todos]);
    return newItem;
  },

  // Toggle done status
  toggleDone: async (id) => {
    const todos = getStoredTodos();
    const updatedTodos = todos.map(t => 
      t._id === id ? { ...t, done: !t.done } : t
    );
    saveTodos(updatedTodos);
    return updatedTodos.find(t => t._id === id);
  },

  // Remove a todo
  remove: async (id) => {
    const todos = getStoredTodos();
    saveTodos(todos.filter(t => t._id !== id));
  }
};