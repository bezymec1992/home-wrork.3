import React, { Component } from 'react';
import './Form.css';
class Form extends Component {
  state = {
    name: '',
    phone: '',
    surname: '',
    btt: false
    
  };

  onInputChange = (e) => {
    const { value, name } = e.target;
    
      this.setState({
        ...this.state,
        [name]: value,
      });

      const btn = e.target.parentNode.lastChild
      if((this.state.name !== '') && (this.state.surname !== '') && (this.state.phone !== '')) {
        btn.classList.add("allFill")
      } else {
        btn.classList.remove("allFill")
      }
    
    
  };

  onClick = (e) => {
    e.preventDefault();
    this.props.onAddElemnt(this.state);
    this.resetForm();
    e.target.classList.remove("allFill")

  };

  resetForm = () => {
    this.setState({ name: '', phone:'', surname:'' });
  };

  onAdd = () => {
    this.setState({btt: true})
  }
  onCencel = (e) => {
    this.setState({btt: false})
  }

  render() {
    
    return (
      <div>
        <button className='open' onClick={this.onAdd}>ADD new BIO</button>
        <form
          className={`form ${this.state.btt == true ? 'formopen' : ''}`}
        >
          <input
            type="text"
            value={this.state.name}
            onChange={this.onInputChange}
            placeholder="Name"
            name="name"
            required
          />
          <input
            type="text"
            value={this.state.surname}
            onChange={this.onInputChange}
            placeholder="Surname"
            name="surname"
            required
          />
          <input
            type="tel"
            value={this.state.phone}
            onChange={this.onInputChange}
            placeholder="Phone"
            name="phone"
            required
          />
          <button className='cencel' onClick={this.onCencel}>CENCEL</button>
          <button className='add' type="submit" onClick={this.onClick}>Add element</button>
          
        </form>
      </div>
    );
  }
}

export default Form;
