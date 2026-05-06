const API_URL = 'http://localhost:5000/api/todos';

export const todoService = {
  // Fetch all todos
  getAll: async () => {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch tasks');
    return await response.json();
  },

  // Create a new todo
  create: async (todoData) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to create task');
    }
    return await response.json();
  },

  // Toggle done status
  toggleDone: async (id) => {
    const response = await fetch(`${API_URL}/${id}/done`, {
      method: 'PATCH',
    });
    if (!response.ok) throw new Error('Failed to toggle task');
    return await response.json();
  },

  // Remove a todo
  remove: async (id) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete task');
  },

  // Update a todo
  update: async (id, todoData) => {
    const response = await fetch(`${API_URL}/${id}/update`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoData),
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to update task');
    }
    return await response.json();
  }
};