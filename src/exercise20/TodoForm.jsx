import { useState, useContext } from 'react';
import TodoContext from './TodoContext';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleAdd = (e) => {
    e.preventDefault();
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      dispatch({ type: 'add', payload: newTodo });
      setText('');
    }
  };

  return (
    <form onSubmit={handleAdd} className="flex gap-3 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        className="flex-1 px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-purple-600 text-slate-600 placeholder-slate-400 text-sm"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-[#9112FF] hover:bg-[#8000FF] text-white font-semibold rounded-xl text-sm transition duration-150"
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;