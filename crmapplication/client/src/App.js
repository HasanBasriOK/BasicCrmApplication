import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


var username="";
var password="";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { apiResponse: "Login" };

    this.callAPI=this.callAPI.bind(this);
    this.usernameInputChange=this.usernameInputChange.bind(this);
    this.passwordInputChange=this.passwordInputChange.bind(this);
  }

  
  usernameInputChange(event)
  {
    username=event.target.value;
    console.log(username);
  }

  passwordInputChange(event)
  {
    password=event.target.value;
    console.log(password);
  }

  callAPI() {
    fetch("http://localhost:5000/testAPI/Login?username="+username+"&password="+password)
      .then(res => res.text())
      .then(res  => {

        if(res=="true")
        {
          alert("Login successfull");
        }
        else
        {
          alert("Check username and password");
        }

      } 
        

        
        );
      // .then(res => this.setState({ apiResponse: res }));
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.apiResponse}</p>
          <input placeholder="Username" type="text" onChange={this.usernameInputChange}></input>
          <input placeholder="Password" type="password" onChange={this.passwordInputChange}></input>
          <button onClick={this.callAPI}>
          {this.state.apiResponse}
          </button>
        </header>
      </div>
    );

  }

}

export default App;
