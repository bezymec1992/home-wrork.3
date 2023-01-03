import React, {useState} from 'react';
import './Form.css';

function Form({onSubmitForm}) {
    const [todo, setTodo] = useState({title: '', author: '', phone: ''});
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
        setTodo({title: '', author: '', phone: ''})
    }

    const cancel = (e) => {
        e.preventDefault()
        setOpen(false)
        setTodo({title: '', author: '', phone: ''})
    }


    return (
        <>
        <button onClick={() => setOpen(true)}>add new</button>
        <form onSubmit={onSubmit} className={`form ${open ? 'formopen' : ''}`}>
            <div className='input-wrap'>
                <input type='text' value={todo.title} placeholder='Name' name='title' onChange={onChangeHandler} required/>
                <input type='text' value={todo.author} placeholder='Surname' name='author' onChange={onChangeHandler} required/>
                <input type='number' value={todo.phone} placeholder='Phone' name='phone' onChange={onChangeHandler} required/>
            </div>
            <div className='btns-wrap'>
                <button className='send-btn'>Send</button>
                <button className='send-btn' onClick={cancel}>Cancel</button>
            </div>
        </form>
        </>
    );
}

export default Form;
