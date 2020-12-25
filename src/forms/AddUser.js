import React, { Component } from 'react'
import posed from 'react-pose';
import UserConsumer from '../context/Context';
import axios from 'axios';


const Animation = posed.div({
  visible: { opacity: 1,
             transition: { duration: 500 },
             applyAtStart:{ 
               display:'block'} 
           },
  hidden: { opacity: 0,
            applyAtEnd:{
              display:'none'
            } 
          }
});

export default class AddUser extends Component {

  state = {
    isVisible: true,
    name: "",
    department:"",
    salary: "",
    error: false
  }

  changeVisibility = (e) => {
    this.setState({
      isVisible: !this.state.isVisible
    })
  }

  validateForm = () => {
    const {name, department, salary} = this.state;
    if(name === '' || salary === '' || department === ''){
      return false
    }

    return true;
  }

  changeInput = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    }) 
  }

  addUser = async (dispatch,e) => {
    e.preventDefault();
    const {name, department, salary} = this.state;

    const newUser = {
      name, salary, department
    }

    if(!this.validateForm()){
      this.setState({
        error:true
      })
      return;
    }

    const response = await axios.post("http://localhost:3001/users",newUser)

    dispatch({type:"ADD_USER",payload:response.data});

    //redirect
    this.props.history.push('/')
  }



 
  render() {
    const { name, department, salary, error } = this.state;

    return(
      <UserConsumer>
        {
          value => {
            const {dispatch} = value;

            return (
      
              <div className="col-md-8 mb-4">
                <button onClick={this.changeVisibility} className="btn btn-dark btn-block mb-2">{this.state.isVisible ? "Hide Form" : "Show Form"}</button>
                <Animation pose={this.state.isVisible ? 'visible' : 'hidden'}>
                  <div className="card">
                    <div className="card-header">
                      <h4>Add User Form</h4>
                    </div>
                    
                    <div className="card-body">
                      {error ? 
                        <div className="alert alert-danger">Please check your Information</div>
                        :null
                      }
                      <form onSubmit={this.addUser.bind(this,dispatch)}>
                        <div className="form-group">
                          <label htmlFor="name">Name:</label>
                          <input type="text"
                                name="name"
                                id="name"
                                placeholder="Enter Name"
                                className="form-control" 
                                value={ name }
                                onChange={this.changeInput}
                              />
                        </div>
        
                        <div className="form-group">
                          <label htmlFor="department">Department:</label>
                          <input type="text"
                            name="department"
                            id="department"
                            placeholder="Enter Department"
                            className="form-control"
                            value = { department }
                            onChange={ this.changeInput}
                          />
                        </div>
        
                        <div className="form-group">
                          <label htmlFor="salary">Salary:</label>
                          <input type="text"
                            name="salary"
                            id="salary"
                            placeholder="Enter Salary"
                            className="form-control" 
                            value={ salary }
                            onChange={ this.changeInput }
                          />
                        </div>
        
                        <button className="btn btn-danger btn-block" type="submit">Add User</button>
        
                      </form>
                    </div>
                  </div>
                </Animation>
        
              </div>
            );
          }
        }
      </UserConsumer>
    )


  }
}
