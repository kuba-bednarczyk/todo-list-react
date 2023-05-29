import { useContext } from 'react';
import { TodosContext } from './TodosContext';
import { PropTypes } from 'prop-types';

function TodoItem({ completed, id, title }) {
  const { toggleTodo, deleteTodo } = useContext(TodosContext);

  return (
    <li>
    <label>
      <input
        type='checkbox'
        checked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      {title}
    </label>
    <button
      className='btn btn-danger'
      onClick={() => deleteTodo(id)}
    >
      Delete
    </button>
  </li>
  )
}

TodoItem.propTypes = {
  completed: PropTypes.bool,
  id: PropTypes.str,
  title: PropTypes.str
}


export default TodoItem;