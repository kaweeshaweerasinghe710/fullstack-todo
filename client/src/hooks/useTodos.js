import { useState, useEffect } from 'react';
import { todoService } from '../services/todoService';

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await todoService.getAll();
      setTodos(data);
    } catch (err) {
      console.error("Failed to fetch", err);
    } finally {
      setLoading(false);
    }
  };

  const addItem = async (todoData) => {
    const newItem = await todoService.create(todoData);
    setTodos(prev => [newItem, ...prev]);
  };

  const toggleItem = async (id) => {
    const updated = await todoService.toggleDone(id);
    setTodos(prev => prev.map(t => t._id === id ? updated : t));
  };

  const deleteItem = async (id) => {
    await todoService.remove(id);
    setTodos(prev => prev.filter(t => t._id !== id));
  };

  return {
    todos,
    loading,
    addItem,
    toggleItem,
    deleteItem,
    refresh: fetchData
  };
};
