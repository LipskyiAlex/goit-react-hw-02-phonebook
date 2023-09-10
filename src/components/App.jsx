import React from "react";
import {Input} from './input/index';


class App extends React.Component {

  state = {

    contacts: [],
    name: ''
    
  }


  render() {

    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
      >
        React homework template

        <Input />
      </div>
    );

  }
 
};


export default App;