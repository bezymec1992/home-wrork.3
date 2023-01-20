import {useEffect, useState} from "react";

export default function useTodos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(resp => resp.json())
            .then(data => setTodos(data))
    }, []);



    const deleteTodoItem = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE'
        })
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const addTodoItem = (todo) => {
        todo = {...todo, completed: false}

        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(todo),
            headers: {'Content-Type': 'application/json'}
        })
            .then(resp => resp.json())
            .then(data => setTodos([...todos, data]))
    }

    const toggleTodoItem = (id) => {
        let newItem = todos.find((todo) => todo.id === id)

        newItem = {...newItem, completed: !newItem.completed}

        const newTodos = todos.map(todo => todo.id === id ? newItem : todo)
        setTodos(newTodos)

        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(newItem),
            headers: {'Content-Type': 'application/json'}
        })
    }
    return {
        todos, addTodoItem, deleteTodoItem, toggleTodoItem
    }
}
