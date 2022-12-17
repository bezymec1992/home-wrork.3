import React from 'react';
import './App.css';
import List from './components/List/List';
import Form from './components/Form/Form';

class App extends React.Component {
  state = {
    rows: [
      {
        id: 1, phone: "23424354", isCompleted: true, name: 'Dima', surname:'lara',
      },
      {
        id: 2, phone: "123123", isCompleted: false, name: 'Kola', surname:'lara',
      },
      {
        id: 3, phone: "12313123", isCompleted: true, name: 'Jona', surname:'lara',
      },
    ],
  };

  addTodo = (newTodo) => {
    this.setState(
      {
        rows:
            [
              ...this.state.rows,
              {
                id: Math.random(),
                isCompleted: false,
                ...newTodo,
              }],
      },
    );
  };

  deleteTodo = (id) => {
    this.setState({ rows: this.state.rows.filter((todo) => todo.id !== id) });
  };

  toggleTodo = (id) => {
    const newTodos = this.state.rows.map((todo) => (todo.id !== id
      ? todo
      : { ...todo, isCompleted: !todo.isCompleted }));
    this.setState({ rows: newTodos });
  };

  render() {
    return (
      <>
        <div className='wrapp'>
          <div className='descript descript1'>Name</div>
          <div className='descript descript2'>Surname</div>
          <div className='descript descript2'>Phone</div>
        </div>
        
        <List rows={this.state.rows} onToggle={this.toggleTodo} onDeleteItem={this.deleteTodo} />
        <Form onAddElemnt={this.addTodo} />
      </>
    );
  }
}

export default App;

// rows: [{}, {}]
// toggle
// state > rows : [{}, {}, {}]
