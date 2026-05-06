export const validateTodo = (title) => {
  if (!title || title.trim().length < 3) {
    return "Task must be at least 3 characters long.";
  }
  return null;
};