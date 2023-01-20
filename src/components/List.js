import React from 'react';
import ListItem from "./ListItem/ListItem";

function List({todos, onDeleteItem, onToggleItem}) {

    return (
        <ul>
            <div className='li-wrap title'>
                <p>NAME</p>
                <p>LAST NAME</p>
                <p>PHONE</p>
            </div>
            {todos.map(todo => <ListItem key={todo.id} todo={todo} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />)}
        </ul>
    );
}

export default List;
