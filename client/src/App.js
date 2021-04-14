import React, { Component } from "react";
import axios from "axios";


const axiosInstance= axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})
export default class App extends Component {
  state = {
    hello: null
  }

  componentDidMount() {
    // API call via local server
 this.asyncFunction()
    }
    
    asyncFunction =async() =>{
      await fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(json => console.log(json) )
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
