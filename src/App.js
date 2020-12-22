import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import AddUser from './components/AddUser'
import Users from './components/Users'




export default class App extends Component {

  render() {


    return (
      
        <div className="container">
          <Navbar title="User App" />
          <hr />
          <AddUser/>
          <Users />
        </div>   

    );
  }
}


