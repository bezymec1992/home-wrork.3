import React, { Component } from 'react';
import './List.css';
import ListItem from '../ListItem/ListItem';


class List extends Component {
  render() {
    return (
      <div>
        {this.props.rows.map(
          (item) => (
            <ListItem
              item={item}
              key={item.id}
              onToggle={this.props.onToggle}
              onDeleteItem={this.props.onDeleteItem}
            />
          ),
        )}
      </div>
    );
  }
}

export default List;
