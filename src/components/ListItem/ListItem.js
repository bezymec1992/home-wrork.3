import React from 'react';
import './ListItem.css';

function ListItem({todo, onDeleteItem}) {

    const onDeleteTodo = (e) => {
        e.stopPropagation()
        onDeleteItem(todo.id)
    }

    return (
        <li >
            <p>{todo.title}</p>
            <p>{todo.author}</p>
            <p>{todo.phone}</p>
            <button onClick={onDeleteTodo}>X</button>
        </li>
    );
}

export default ListItem;
