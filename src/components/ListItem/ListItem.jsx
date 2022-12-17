import React, { Component } from 'react';
import './ListItem.css';

class ListItem extends Component {
  onClickDelete = (e) => {
    e.stopPropagation();
    this.props.onDeleteItem(this.props.item.id);
  };

  render() {
    const { item, onToggle } = this.props;
    return (
      <div
        className={`todo-item ${item.isCompleted ? 'done' : ''}`}
        onClick={() => onToggle(item.id)}
      >
        <div className='box'>
          {item.name}
        </div>
        <div className='box'>
          {item.surname}
        </div>
        <div className='box'>
          {item.phone}
        </div>
        <span className="delete-button" onClick={this.onClickDelete}>delete</span>
      </div>
    );
  }
}

export default ListItem;
