import React, { Component } from 'react';
import User from './User';
import UserConsumer from '../context/Context'


export default class Users extends Component {
  render(props) {

    return (
      <UserConsumer>
        {
          value => {

            const { users } = value;
            return (
              <div>
                {
                  users.map(user => {
                    return (
                      <User
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        salary={user.salary}
                        department={user.department}

                      />
                    )
                  })
                }

              </div>
            )

          }
        }
      </UserConsumer>
    )




  }
}

