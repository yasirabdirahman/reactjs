import { useState, useContext } from 'react';
import TodoContext from './TodoContext';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
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
    <div className="todo-form">
      <input
        type="text"
        className="todo-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button className="add-btn" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default TodoForm;