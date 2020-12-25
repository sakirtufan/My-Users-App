import React, { Component } from 'react'
import UserConsumer from '../context/Context';
import axios from 'axios';


export default class UpdateUser extends Component {

  state = {
    name: "",
    department: "",
    salary: ""
  }

  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount = async () => {
    const {id} = this.props.match.params;

    const response = await axios.get(`http://localhost:3001/users/${id}`);
    const { name, department, salary } = response.data;

    this.setState({
      name, department, salary 
    })
  }
  

  UpdateUser = async (dispatch, e) => {
    e.preventDefault();
    //UpdateUser
    const { name, department, salary } = this.state;
    const {id} = this.props.match.params;
    const updatedUser={
      name, department, salary
    }


    const response = await axios.put(`http://localhost:3001/users/${id}`,updatedUser);

    dispatch({type: 'UPDATE_USER', payload: response.data});



    //redirect
    this.props.history.push('/')

  }

  render() {
    const { name, department, salary } = this.state;

    return (
      <UserConsumer>
        {
          value => {
            const { dispatch } = value;

            return (

              <div className="col-md-8 mb-4">
                <div className="card">
                  <div className="card-header">
                    <h4>Update User Form</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.UpdateUser.bind(this, dispatch)}>
                      <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text"
                          name="name"
                          id="name"
                          placeholder="Enter Name"
                          className="form-control"
                          value={name}
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
                          value={department}
                          onChange={this.changeInput}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="salary">Salary:</label>
                        <input type="text"
                          name="salary"
                          id="salary"
                          placeholder="Enter Salary"
                          className="form-control"
                          value={salary}
                          onChange={this.changeInput}
                        />
                      </div>
                      <button className="btn btn-info btn-block" type="submit">Update User</button>

                    </form>
                  </div>
                </div>
              </div>
            );
          }
        }
      </UserConsumer>
    )


  }
}

