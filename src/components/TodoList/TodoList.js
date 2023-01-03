import React, {useEffect, useState} from 'react';
import List from "../List/List";
import Form from "../Form/Form";
import './TodoList.css';

function TodoList(props) {
    const [todos, setTodos] = useState([
        {id: 1, title: 'Djon',  author: 'Week', phone: '123123'},
        {id: 2, title: 'Dad',  author: 'Big', phone: '123123'},
        {id: 3, title: 'Mom',  author: 'Nice', phone: '123123'},
    ])

    const deleteTodoItem = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const addTodoItem = (todo) => {
        todo = {...todo, id: Date.now()}
        setTodos([...todos, todo])
    }

    return (
    <div className='wrap'>
        <div className='titles'>
            <h2>Name</h2>
            <h2>Surname</h2>
            <h2>Phone</h2>
        </div>
        <List todos={todos} onDeleteItem={deleteTodoItem} />
        <Form onSubmitForm={addTodoItem}/>
    </div>
    );
}

export default TodoList;
