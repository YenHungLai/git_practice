import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import UserManagement from '../userManagement/userManagement'

class DesignerMenu extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return(
      <div>
        <button class='fixed pin-t'><Link to="/">Return</Link></button>
        <div class='flex justify-center'>
            <button class='btn-reg'><Link to="/userManagement">User Management</Link></button>
        </div>
      </div>
    )
  }
}

export default DesignerMenu
