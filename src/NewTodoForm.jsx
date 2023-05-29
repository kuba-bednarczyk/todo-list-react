import { useState } from 'react';
// import PropTypes from 'prop-types';
import { useContext } from 'react';
import { TodosContext } from './TodosContext';

function NewTodoForm() {
  const [newItem, setNewItem] = useState('');
  const { addTodo } = useContext(TodosContext);

  function handleSubmit(e) {
    e.preventDefault();
    if (newItem === '') return;
    addTodo(newItem);
    setNewItem('');
  }

  return (
    <form className='new-item-form' onSubmit={handleSubmit}>
      <div className='form-row'>
        <label htmlFor='item'>New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type='text'
          id='item'
        />
        <button className='btn'>Add</button>
      </div>
    </form>
  );
}

export default NewTodoForm;
