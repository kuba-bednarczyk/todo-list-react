import { useState } from 'react';
import PropTypes from 'prop-types';

function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState('');

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

NewTodoForm.propTypes = {
  addTodo: PropTypes.func
}


export default NewTodoForm;
