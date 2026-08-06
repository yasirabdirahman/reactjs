import { useContext } from 'react';
import TodoContext from './TodoContext';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li className="todo-item">
      <span
        className={`todo-text ${todo.completed ? 'completed' : ''}`}
        style={{
          cursor: 'pointer',
        }}
        onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
      >
        {todo.text}
      </span>
      <button className="delete-btn" onClick={() => dispatch({ type: 'delete', payload: todo.id })}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
