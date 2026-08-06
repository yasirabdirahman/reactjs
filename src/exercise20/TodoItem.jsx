import { useContext } from 'react';
import TodoContext from './TodoContext';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li className="flex items-center justify-between px-4 py-4 bg-[#F8F9FA] rounded-2xl">
      <label className="flex items-center gap-4 cursor-pointer flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => dispatch({ type: 'toggle', payload: todo.id })}
          className="w-5 h-5 rounded border-slate-300 text-[#0075FF] focus:ring-0 cursor-pointer accent-[#0075FF]"
        />
        <span
          className={`text-base font-medium transition ${
            todo.completed
              ? 'line-through text-slate-400'
              : 'text-[#4A5568]'
          }`}
        >
          {todo.text}
        </span>
      </label>

      {todo.completed && (
        <button
          onClick={() => dispatch({ type: 'delete', payload: todo.id })}
          className="text-base font-medium text-[#E53E3E] hover:underline ml-2"
        >
          Delete
        </button>
      )}
    </li>
  );
};

export default TodoItem;