import { useReducer } from 'react';
import TodoContext from './TodoContext';
import { reducer, initialState } from './reducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <div className="todo-wrapper">
        <div className="todo-container">
          <h2 className="todo-title">Todo App with Context and Reducer</h2>
          <TodoForm />
          <TodoList />
        </div>
      </div>
    </TodoContext.Provider>
  );
};

export default TodoApp;