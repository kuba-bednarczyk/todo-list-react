import { useEffect, useState } from 'react';
import './styles.css';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import { TodosContext } from './TodosContext.js';

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS');
    if (localValue == null) return [];
    return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos));
  }, [todos]);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <TodosContext.Provider value={{addTodo, toggleTodo, deleteTodo, todos, setTodos}}>
      <NewTodoForm />
      <h1 className='header'>Todo List</h1>
      <TodoList />
    </TodosContext.Provider>
  );
}

export default App;
