import React, {useEffect, useState} from 'react';
import List from "./List";
import Form from "./Form/Form";
import useTodos from "../hooks/useTodos";

function TodoList(props) {
    const {todos, toggleTodoItem, deleteTodoItem, addTodoItem} = useTodos()

    return (
    <>
        <List todos={todos} onDeleteItem={deleteTodoItem} onToggleItem={toggleTodoItem}/>
        <Form onSubmitForm={addTodoItem}/>
    </>
    );
}

export default TodoList;
