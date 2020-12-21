import React, { Component } from 'react'

const UserContext = React.createContext();

const reducer = (state,action) => {
  switch (action.type) {
    case "DELETE_USER":
      return{
        ...state,
        users:state.users.filter(user => action.payload !== user.id)
      }
  
    default:
      return state;
  }
}

export class UserContextProvider extends Component {

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
        salary: "1000"
      }

    ],

    // dispatch actionlari  bir fonksiyon
    dispatch: action => {
      this.setState(state => reducer(state, action)
      )
    }
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

