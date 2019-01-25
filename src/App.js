// TODO:
//  Tailwind is not setup right, cannot automate.
//  Cannot put firebaseuiLogin inside react router. kinda can.
//  Firebaseui wrapper functions do not work.

import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import firebase from 'firebase'
import * as firebaseui from 'firebaseui'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import SchoolSurveyForm from './components/schoolSurveyForm/schoolSurveyForm'
import LoginPage from './components/loginPage/loginPage'
import Menu from './components/menu/menu'
import DesignerMenu from './components/designerMenu/designerMenu'
import UserManagment from './components/userManagement/userManagement'
// import FirebaseuiLogin from './components/firebaseuiLogin/firebaseuiLogin'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDhoOhUvQ3iwLfpJ3KYRu_htqMRA7PH_gc",
  authDomain: "schoolprotectorsoftwaresystem.firebaseapp.com",
  databaseURL: "https://schoolprotectorsoftwaresystem.firebaseio.com",
  projectId: "schoolprotectorsoftwaresystem",
  storageBucket: "schoolprotectorsoftwaresystem.appspot.com",
  messagingSenderId: "228406926247"
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});

// // Initialize the FirebaseUI Widget using Firebase.
// var ui = new firebaseui.auth.AuthUI(firebase.auth());
// // The start method will wait until the DOM is loaded.
// ui.start('#firebaseui-auth-container', uiConfig);

class App extends Component {
  constructor() {
    super()
    this.state = {
      isSignedIn: false // Local signed-in state.
    }
  }

  // FirebaseUI config.
  uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/schoolSurveyForm',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      // firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      // firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // firebase.auth.PhoneAuthProvider.PROVIDER_ID,
      // firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
    ],
    // // Avoid redirects after sign-in.
    // callbacks: {
    //   signInSuccessWithAuthResult: () => false
    // },
    // Terms of service url/callback.
    tosUrl: '<your-tos-url>',
    // Privacy policy url/callback.
    privacyPolicyUrl: function() {
      window.location.assign('<your-privacy-policy-url>');
    }
  };

  // Listen to the Firebase Auth state and set the local state.
  componentDidMount() {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
        (user) => this.setState({isSignedIn: !!user})
    );
    console.log("firebaseui mounted!!!");
    console.log(this.state.isSignedIn);
  }
  //
  // // Make sure we un-register Firebase observers when the component unmounts.
  // componentWillUnmount() {
  //   this.unregisterAuthObserver();
  //   console.log("firebaseui unmounted!!!");
  // }

  render() {
    // if(!this.state.isSignedIn) {
    //   return (
    //     <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
    //   );
    //   console.log("firebaseui if statement!!!");
    // }
    // return(
    //   <div>
    //     <BrowserRouter>
    //       <switch>
    //         <Route exact path='/' />
    //         <Route path='/menu' component={Menu} />
    //         <Route path='/schoolSurveyForm' component={SchoolSurveyForm} />
    //         <Route path='/designerMenu' component={DesignerMenu} />
    //         <Route path='/userManagment' component={UserManagment} />
    //       </switch>
    //     </BrowserRouter>
    //   </div>
    // )
    const FirebaseuiLogin = () => {
      return(
        <div class='mt-20'>
          <h1 class='text-center text-white'>Please Sign In</h1>
          <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        </div>
      )
    }

    return(
      <div>
        <BrowserRouter>
          <switch>
            <Route exact path='/' component={FirebaseuiLogin}/>
            <Route path='/menu' component={Menu} />
            <Route path='/schoolSurveyForm' component={SchoolSurveyForm} />
            <Route path='/designerMenu' component={DesignerMenu} />
            <Route path='/userManagment' component={UserManagment} />
          </switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
