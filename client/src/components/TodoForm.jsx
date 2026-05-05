import { useState } from 'react';
import { validateTodo } from '../utils/validation';

const TodoForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateTodo(title);
    if (validationError) {
      setError(validationError);
      return;
    }
    onAdd({ title });
    setTitle('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input 
            className={`w-full px-6 py-4 rounded-2xl bg-white border ${error ? 'border-rose-200 ring-4 ring-rose-50' : 'border-slate-200 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-50'} outline-none transition-all duration-300 text-slate-700 font-medium placeholder:text-slate-300 shadow-sm`}
            placeholder="Capture your next big goal..."
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
              if (error) setError('');
            }}
          />
        </div>
        <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-100 transition-all duration-300 active:scale-95 whitespace-nowrap">
          Add Task
        </button>
      </div>
      {error && (
        <p className="absolute -bottom-6 left-2 text-[11px] font-bold text-rose-500 uppercase tracking-wider">
          {error}
        </p>
      )}
    </form>
  );
};

export default TodoForm;