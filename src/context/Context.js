import React, { Component } from 'react'
import axios from 'axios'

const UserContext = React.createContext();

const reducer = (state,action) => {
  switch (action.type) {
    case "DELETE_USER":
      return{
        ...state,
        users:state.users.filter(user => action.payload !== user.id)
      }
    case "ADD_USER":
      return{
        ...state,
        users : [...state.users,action.payload]
      }
    default:
      return state;
  }
}

export class UserContextProvider extends Component {

  state = {
    users: [],

    // dispatch actions
    dispatch: action => {
      this.setState(state => reducer(state, action)
      )
    }
  }

  componentDidMount = async () => {
    const response = await axios.get("http://localhost:3001/users");
    this.setState(state => {
      return {users:response.data}
    })
  }
  

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;

