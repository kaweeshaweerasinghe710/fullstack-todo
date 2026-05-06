import { useState } from 'react';
import { validateTodo } from '../utils/validation';

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validateTodo(title);
    if (validationError) {
      setError(validationError);
      return;
    }
    await onAdd({ title: title.trim(), description: description.trim() });
    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex flex-col gap-3">
        <div>
          <input
            id="task-title"
            className={`w-full px-6 py-4 rounded-2xl bg-gray-100 border ${error ? 'border-rose-200 ring-4 ring-rose-50' : 'border-slate-200 focus:border-indigo-400 '} outline-none transition-all duration-300 text-slate-700 font-medium placeholder:text-slate-300 shadow-sm`}
            placeholder="Capture your next big goal..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (error) setError('');
            }}
          />
          {error && (
            <p className="mt-1.5 ml-2 text-[11px] font-bold text-rose-500 uppercase tracking-wider">
              {error}
            </p>
          )}
        </div>
        <textarea
          id="task-description"
          className="w-full px-6 py-3 rounded-2xl bg-gray-100 border border-slate-200 focus:border-indigo-400 focus:ring-indigo-50 outline-none transition-all duration-300 text-slate-600 text-sm placeholder:text-slate-300 shadow-sm resize-none h-20"
          placeholder="Add a description (optional)..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          type="submit"
          className="w-full md:w-auto self-end px-8 py-4 bg-indigo-800 hover:bg-indigo-500 text-white font-bold rounded-2xl shadow-lg shadow-indigo-100 transition-all duration-300 active:scale-95"
        >
          Add Task
        </button>
      </div>
    </form>
  );
};

export default TodoForm;