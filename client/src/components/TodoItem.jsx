import { useState } from 'react';
import { FiEdit2, FiTrash2, FiCheck, FiX } from 'react-icons/fi';

const TodoItem = ({ todo, onToggle, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);
  const [editDesc, setEditDesc] = useState(todo.description || '');

  const handleSave = () => {
    if (!editTitle.trim()) return;
    onUpdate(todo._id, { title: editTitle.trim(), description: editDesc.trim() });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(todo.title);
    setEditDesc(todo.description || '');
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="p-5 bg-white rounded-2xl border-2 border-indigo-100 shadow-md space-y-3">
        <input
          className="w-full px-3 py-2 bg-slate-50 rounded-lg outline-none border focus:border-indigo-400 font-bold text-slate-700"
          value={editTitle}
          onChange={(e) => setEditTitle(e.target.value)}
          placeholder="Task title..."
        />
        <textarea
          className="w-full px-3 py-2 bg-slate-50 rounded-lg outline-none border focus:border-indigo-400 text-sm h-20 resize-none text-slate-600"
          value={editDesc}
          onChange={(e) => setEditDesc(e.target.value)}
          placeholder="Description (optional)..."
        />
        <div className="flex gap-2 justify-end">
          <button
            onClick={handleCancel}
            className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors"
          >
            <FiX className="w-4 h-4" />
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-1.5 px-4 py-1.5 text-sm font-bold bg-indigo-800 hover:bg-indigo-700 text-white rounded-lg transition-colors"
          >
            <FiCheck className="w-4 h-4" />
            Save
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-start gap-4 p-5 bg-gray-200 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo._id)}
        className="mt-1 w-5 h-5 rounded-lg border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
      />

      <div className="flex-1 min-w-0">
        <h3 className={`font-bold ${todo.done ? 'line-through text-slate-400' : 'text-slate-800'}`}>
          {todo.title}
        </h3>
        {todo.description && (
          <p className={`text-sm mt-1 ${todo.done ? 'text-slate-300' : 'text-slate-500'}`}>
            {todo.description}
          </p>
        )}
      </div>

      <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all">
        <button
          onClick={() => setIsEditing(true)}
          className="p-2 text-slate-300 hover:text-indigo-800 hover:bg-indigo-50 rounded-xl transition-colors"
          title="Edit task"
        >
          <FiEdit2 className="w-5 h-5" />
        </button>
        <button
          onClick={() => onDelete(todo._id)}
          className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-xl transition-colors"
          title="Delete task"
        >
          <FiTrash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;