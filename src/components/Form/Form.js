import React, {useState} from 'react';
import './Form.css';

function Form({onSubmitForm}) {
    const [todo, setTodo] = useState({name: '', username: '', phone: ''});
    const [open, setOpen] = useState(false);

    const onChangeHandler = (e) => {
        const {value, name} = e.target
        setTodo({
            ...todo,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onSubmitForm(todo)
        setTodo({name: '', username: '', phone: ''})
    }

    const cancel = (e) => {
        e.preventDefault()
        setOpen(false)
        setTodo({name: '', username: '', phone: ''})
    }


    return (
        <>
            <button className='btn-add' onClick={() => setOpen(true)}>Create new person</button>
            <form onSubmit={onSubmit} className={`form ${open ? 'formopen' : ''}`}>
                <input type='text' value={todo.name} name='name' onChange={onChangeHandler} placeholder="Name" required/>
                <input type='text' value={todo.username} name='username' onChange={onChangeHandler} placeholder="Last name" required/>
                <input type='number' value={todo.phone} name='phone' onChange={onChangeHandler} placeholder="Phone" required/>
                <button>Add new person</button>
                <button onClick={cancel}>Cancel</button>
            </form>
        </>
    );
}

export default Form;
