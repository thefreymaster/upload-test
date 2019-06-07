import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { uploadFileToFirebase } from './Upload';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      file: {
        name: ''
      }
    }
  }
  handleUpload = () => {
    uploadFileToFirebase(this.state.file);
  }
  handleOnChange = (e) => {
    let that = this;
    const { files } = e.target;
    this.setState({
      file: files[0],
    })
    let reader = new FileReader();
    reader.onload = function (e) {
      that.setState({
        filePath: e.target.result
      })
    };
    reader.readAsDataURL(files[0]);
  }
  render() {
    const { filePath } = this.state;
    return (
      <div className="App">
        <header className="App-header" style={{ display: 'flex', flexDirection: 'column' }}>
          <img style={{maxWidth: 200, margin: 20, borderRadius: 5}} src={filePath} />
          <input
            style={{maxWidth: 200, padding: 20, margin: 20, borderRadius: 5}} 
            type="file"
            onChange={this.handleOnChange}
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
          <button style={{maxWidth: 200, margin: 20, padding: 20, borderRadius: 5}} onClick={this.handleUpload}>Upload</button>
        </header>
      </div>
    )
  }
}

export default App;
