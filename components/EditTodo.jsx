import React, { useState } from 'react'

const EditTodo = ({ todo, editTodoCallback }) => {
    const [formData, setFormData] = useState({
        id: todo.todo_id,
        description: todo.description
    });
    
    const updateTodo = e => {
        e.preventDefault();
        editTodoCallback(formData);
        setFormData({description: '', id: ''});
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <>
            <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
                Edit
            </button>

            <div className="modal" id={`id${todo.todo_id}`} 
                onClick={() => setFormData({
                                id: todo.todo_id,
                                description: todo.description
                            })}>
                <div className="modal-dialog">
                    <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Edit Todo</h4>
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal"
                            onClick={() => setFormData({
                                id: todo.todo_id,
                                description: todo.description
                            })}
                            ></button>
                    </div>

                    <div className="modal-body">
                            <input 
                                id={`id${todo.todo_id}`}
                                type="text" 
                                className="form-control" 
                                value={formData.description}
                                onChange={handleChange}
                                name="description"
                            />
                    </div>

                    <div className="modal-footer">
                        <button 
                            className="btn btn-warning btn-block" 
                            onClick={(e) => updateTodo(e)}
                            data-bs-dismiss="modal"
                            >Edit
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-danger" 
                            data-bs-dismiss="modal" 
                            onClick={() => setFormData({
                                id: todo.todo_id,
                                description: todo.description
                            })}>Close</button>
                    </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default EditTodo