import React, { Component } from 'react'

const UserContext = React.createContext();

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

    ]
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

