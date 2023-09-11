import React from "react";
import {Input} from './input/Input';


class App extends React.Component {

  state = {

    contacts: [],
    name: ''
    
  }

  handleChange = (e) => {

     const {name,value} = e.target;
      this.setState({

         [name]:value
      })

  }


  render() {

     const {contacts,name} = this.state;
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 20,
          color: '#010101',
          flexDirection:'column'
        }}
      >
      <h1>Phonebook</h1>
        <Input name={name} onChange={this.handleChange}/>
        <h2>Contacts</h2>

      </div>
    );

  }
 
};


export default App;