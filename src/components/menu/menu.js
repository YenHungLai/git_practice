import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import SchoolSurveyForm from '../schoolSurveyForm/schoolSurveyForm'
import LoginPage from '../loginPage/loginPage'
// import '../../App.css'

class Menu extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
      return(
        <div className="menu">
          <button className="Return"><Link to="/">Return</Link></button>
          <span className="tabs">
            <button id='SSF'><Link to="/schoolSurveyForm">School Survey Form</Link></button>
          </span>
        </div>
      )
  }
}

export default Menu
