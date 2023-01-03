import React from 'react';
import ListItem from "../ListItem/ListItem";
import './List.css';

function List({todos, onDeleteItem, onToggleItem}) {

    return (
        <ul>
            {todos.map(todo => <ListItem key={todo.id} todo={todo} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />)}
        </ul>
    );
}

export default List;
