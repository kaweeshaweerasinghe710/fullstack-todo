/**
 * Filters the todo list based on the selected tab status.
 * @param {Array} todos 
 * @param {string} tab 
 * @returns {Array} 
 */
export const getFilteredTodos = (todos, tab) => {
  return todos.filter(t =>
    tab === 'active' ? !t.done : t.done
  );
};

/**
 * Returns stats about the todos list.
 * @param {Array} todos
 * @returns {Object} 
 */
export const getTodoStats = (todos) => {
  const total = todos.length;
  const completed = todos.filter(t => t.done).length;
  return { completed, total };
};