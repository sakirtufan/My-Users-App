import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './layout/Navbar'
import AddUser from './forms/AddUser'
import UpdateUser from './forms/UpdateUser'
import Users from './components/Users'
import NotFound from './pages/NotFound'
import Contribute from './pages/Contribute'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";




export default class App extends Component {

  render() {


    return (
      <Router>
        <div className="container">
          
            <Navbar title="User App" />
            <hr />

            <Switch>
              <Route exact path="/" component={Users}/>
              <Route exact path="/add" component={AddUser}/> 
              <Route exact path="/github" component={Contribute}/> 
              <Route exact path="/edit/:id" component={UpdateUser}/> 
              <Route component={NotFound}/>               
            </Switch>                 
          
        </div>
      </Router>


    );
  }
}


