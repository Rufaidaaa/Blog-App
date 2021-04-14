import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  state = {
    hello: null
  }

  componentDidMount() {
    // API call via local server
    axios.get('/hello')
      .then(res => this.setState({ hello: res.data }))
      .catch(error => console.error(error))
    }
    
  render() {
    return (
      <div className="App">
       
        {this.state.hello
          ? <div>{this.state.hello}</div>
          : ''}
      </div>
    )
  }
}
