import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserConsumer from '../context/Context'


export default class User extends Component {

  state = {
    isVisible: false
  }


  onClickEvent = (e) => {
    this.setState({
      isVisible : !this.state.isVisible
    })
  }

  onDeleteUser = (dispatch,e) => {
    const {id} = this.props;
    dispatch({type:"DELETE_USER",payload:id})
  }

  render(props) {
    
    //Destructing
    const { name,department,salary } = this.props;
    const { isVisible } = this.state;

    return(
      <UserConsumer>
        {
          value =>{
            const {dispatch} = value;

            return (
              <div className= "col-md-8 mb-4">        
                <div className="card">
                  <div className="card-header d-flex justify-content-between">
                    <h4 onClick={this.onClickEvent} className="d-inline">{name}</h4>
                    <i onClick={this.onDeleteUser.bind(this,dispatch)} className="far fa-trash-alt" style={{cursor:'pointer'}}></i>
                  </div>
                  {
                    isVisible ? 
                    <div className="card-body">
                      <p className="card-text"> Salary : {salary}</p>
                      <p className="card-text"> Department : {department}</p>
                    </div> : null
                  }
        
                </div>
              </div>
            );
          }
        }
      </UserConsumer>
    )
    


  }
}

User.propTypes = {
  name: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired
}

User.defaultProps = {
  name: 'Bilgi yok',
  department: 'Bilgi yok',
  salary: 'Bilgi yok'
}
