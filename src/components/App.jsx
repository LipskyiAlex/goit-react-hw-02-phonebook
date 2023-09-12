import React from 'react';
import { Input } from './input/Input';
import Contacts from './contacts/contacts';
import { nanoid } from 'nanoid';

class App extends React.Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  };

  handleChange = e => {
    const { name,value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {

    e.preventDefault();
    const contactId = nanoid();
    const contact = {
      id: contactId,
      contact: this.state.name,
      number: this.state.number
    };

    this.setState((prevState) => ({
    
        contacts: [...prevState.contacts,contact],
        name: ""
      }));

   
    };
 

  render() {
    const { contacts, name, number } = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
          flexDirection: 'column',
        }}
      >
        <h1>Phonebook</h1>
        <Input
          name={name}
          number={number}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <h2>Contacts</h2>
        <Contacts contacts={contacts} />
      </div>
    );
  }
}

export default App;
