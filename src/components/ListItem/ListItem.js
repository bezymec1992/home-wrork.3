import React from 'react';
import './ListItem.css';

function ListItem({todo, onDeleteItem, onToggleItem}) {

    const onDeleteTodo = (e) => {
        e.stopPropagation()
        onDeleteItem(todo.id)
    }

    const onToggle = () => {
        onToggleItem(todo.id)
    }

    return (
        <li onClick={onToggle}>
            <div className='li-wrap'>
                <p>{todo.name}</p>
                <p>{todo.username}</p>
                <p>{todo.phone}</p>
            </div>
              
            <button onClick={onDeleteTodo}>X</button>
        </li>
    );
}

export default ListItem;
