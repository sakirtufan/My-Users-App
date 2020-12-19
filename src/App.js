import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Users from './components/Users'



export default class App extends Component {

  state = {
    users: [
      {
        id: 1,
        name: "Sakir Tufan",
        department: "IT",
        salary: "3500"
      },
      {
        id: 2,
        name: "Fatma Tufan",
        department: "Gesund",
        salary: "3000"
      },
      {
        id: 3,
        name: "Ümit Efe Tufan",
        department: "Schüler",
        salary: ""
      }

    ]
  }
  render() {


    return (
      <div className="container">
        <Navbar title="User App" />
        <hr />
        <Users users = {this.state.users}/>

      </div>
    );
  }
}


