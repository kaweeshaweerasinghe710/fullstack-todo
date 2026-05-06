import { useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';
import { getFilteredTodos, getTodoStats } from '../utils/todoHelpers'; 

const Home = () => {
  const { todos, loading, addItem, toggleItem, deleteItem, updateItem } = useTodos();
  const [activeTab, setActiveTab] = useState('active');

  // Use the utility functions to handle data logic
  const filteredTodos = getFilteredTodos(todos, activeTab); 
  const { completed, total } = getTodoStats(todos);

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl text-center font-black text-indigo-800 tracking-tight align-middle">
            Focus Flow
          </h1>
          
        </header>

        <TodoForm onAdd={addItem} />

        <div className="mt-12">
          <div className="flex gap-8 border-b border-slate-200 mb-8">
            {['active', 'completed'].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-4 text-sm font-bold transition-all relative capitalize ${
                  activeTab === tab ? 'text-indigo-800' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab === 'active' ? 'Your Works' : 'Completed'}
                {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-800" />}
              </button>
            ))}
          </div>

          <div className="space-y-3">
            {loading ? (
              <div className="py-20 text-center text-slate-400 animate-pulse font-medium">Syncing...</div>
            ) : (
              <>
                {filteredTodos.length > 0 ? (
                  filteredTodos.map(todo => (
                    <TodoItem 
                      key={todo._id} 
                      todo={todo} 
                      onToggle={toggleItem} 
                      onDelete={deleteItem}
                      onUpdate={updateItem} 
                    />
                  ))
                ) : (
                  <div className="py-24 text-center bg-white rounded-3xl border border-slate-100 shadow-sm">
                    <p className="text-slate-400 font-medium">
                      {activeTab === 'active' ? "You're all caught up!" : "No completed tasks yet."}
                    </p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>

        {total > 0 && (
          <footer className="mt-16 text-center">
             <div className="inline-block px-4 py-1.5 bg-slate-200/50 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              {completed} / {total} Goals Achieved
            </div>
          </footer>
        )}
      </div>
    </div>
  );
};

export default Home;