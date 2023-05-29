import TodoItem from './TodoItem';
import { useContext } from 'react';
import { TodosContext } from './TodosContext';

export default function TodoList() {
  const { todos } = useContext(TodosContext);

  return (
    <ul className='list'>
      {todos.length === 0 && 'No todos'}
      {todos.map((todo) => {
        return <TodoItem {...todo} key={todo.id} />;
      })}
    </ul>
  );
}
