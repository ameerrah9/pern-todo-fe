import React, { useState } from 'react'

const InputTodo = ( {addTodoCallback} ) => {
  const [formData, setFormData] = useState({
    description: ''
  });
  
  const onSubmitForm = e => {
    e.preventDefault();
    addTodoCallback(formData);
    setFormData({description: ''});
  }

  const handleChange = e => { setFormData({...formData, [e.target.name]: e.target.value}) }

  return (
    <>
      <h1 className='text-center mt-5'>Pern Todo List</h1>
      <form
        onSubmit={onSubmitForm}
        className='d-flex mt-5'>
        <input 
          type="text" 
          className="form-control" 
          placeholder="Add Todo" 
          value={formData.description}
          onChange={handleChange}
          name="description"
        />
        <button className="btn btn-success btn-block">Add</button>
      </form>
    </>
  );
}

export default InputTodo;