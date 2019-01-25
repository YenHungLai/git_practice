import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
// import '../../App.css'
import Menu from '../menu/menu'

class LoginPage extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
      return(
        <div class='flex flex-col mt-32 p-24'>
          <div class='flex justify-center p-5'>
            <div>
              <h4 class='btn-blue'>Username</h4>
              <input placeholder="Enter username"/>
              <br />
              <br />
              <h4>Password</h4>
              <input placeholder="Enter password"/>
            </div>
          </div>
          <div class='flex justify-center p-4'>
            <button class='w-64 bg-yellow hover:bg-blue-dark text-white font-bold py-2 px-4 rounded'>
              <Link to="/schoolSurveyForm">Sign In</Link>
            </button>
          </div>
          <button class='absolute pin-b w-64 bg-yellow hover:bg-blue-dark text-white font-bold py-2 px-4 rounded'>
            <Link to="/designerMenu">DesignerMenu</Link>
          </button>
        </div>
      )
  }
}

export default LoginPage
