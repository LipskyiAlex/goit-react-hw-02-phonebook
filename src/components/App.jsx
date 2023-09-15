import React from 'react';
import Input from './input/Input';
import Contacts from './contacts/contacts';
import Filter from './filter/filter';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { MainContainer,MainTitle,SecondaryTitle } from './App.styled';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', contact: 'Rosie Simpson', number: '459-12-56' },  //! ОЧИСТИТЬ МАССИВ
      { id: 'id-2', contact: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', contact: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', contact: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (values, { resetForm }) => {
    const { name, number } = values;
     const {contacts} = this.state;
    resetForm();
    const contactId = nanoid();
    const newContact = {
      id: contactId,
      contact: name,
      number: number,
    };

    
    if(contacts.filter(({contact})  =>  contact.toLowerCase() === newContact.contact.toLowerCase()).length !== 0) {
      return Notiflix.Notify.failure(`${newContact.contact} is already in contacts`);
    }
    

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  handleDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <MainContainer>
        <MainTitle>Phonebook</MainTitle>
        <Input onSubmit={this.handleSubmit} />
        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter filter={filter} onChange={this.handleChange} />
        <Contacts
          contacts={contacts}
          filter={filter}
          onDelete={this.handleDelete}
        />
      </MainContainer>
    );
  }
}

export default App;
