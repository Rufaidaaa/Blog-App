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
    axiosInstance.get('/posts')
      // .then(res => )
      .then(res => console.log( res.data ))
      .catch(err => console.log(err)
   );
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
