import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { uploadFileToFirebase } from './Upload';

class App extends Component {
  handleOnChange = (e) => {
    uploadFileToFirebase(e)
    console.log(e.target.files)
  }
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input 
          type="file"
          onChange={this.handleOnChange}
          id="avatar" 
          name="avatar"
          accept="image/png, image/jpeg" 
        />
      </header>
    </div>
    )
  }
}

export default App;
