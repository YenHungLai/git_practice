import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'

class UserManagement extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return(
      <div className="userManagement">
        <button className="Return"><Link to="/designerMenu">Log out</Link></button>
        <button>Add User</button>
        <button>Remove User</button>
      </div>
    )
  }
}

export default UserManagement
