import React, {Component} from 'react'
import firebase from 'firebase';
import {BrowserRouter, Route} from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'

class SchoolSurveyForm extends Component {
  constructor() {
    super()
    this.state = {

    }

    // // Initialize Firebase
    // var config = {
    //   apiKey: "AIzaSyDhoOhUvQ3iwLfpJ3KYRu_htqMRA7PH_gc",
    //   authDomain: "schoolprotectorsoftwaresystem.firebaseapp.com",
    //   databaseURL: "https://schoolprotectorsoftwaresystem.firebaseio.com",
    //   projectId: "schoolprotectorsoftwaresystem",
    //   storageBucket: "schoolprotectorsoftwaresystem.appspot.com",
    //   messagingSenderId: "228406926247"
    // };
    // firebase.initializeApp(config);
    this.db = firebase.firestore();
    this.db.settings({
      timestampsInSnapshots: true
    });
  }

  handleChange = (event) => {
    var doorRef = this.db.collection("object").doc("door");
    // Set the "capital" field of the city 'DC'
    return doorRef.update({
        'metadata.color': event.target.value
    })
    .then(function() {
        console.log("Document successfully updated!");
    })
    .catch(function(error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
  }

  render() {
      return(
        <div class='flex flex-col'>
          <div class='flex flex-row justify-center'>
            <button><Link to="/">Log out</Link></button>
            <button class='btn-tab'><Link to="/schoolSurveyForm">School Survey Form</Link></button>
            <button class='btn-tab'><Link to="/schoolSurveyForm">...</Link></button>
            <button class='btn-tab'><Link to="/schoolSurveyForm">...</Link></button>
          </div>
          <h1 class='text-center'>School Survey Form</h1>
          <form>
            <div class='container mx-auto px-32'>
              <div class='flexinitial flex-col'>
                <h4>ID</h4>
                <input />
                <h4>School District</h4>
                <input />
                <h4>School Name</h4>
                <input />
              </div>
            </div>
            <br />
            <div class='container mx-auto px-32 flex flex-row'>
              <div class='p-1'>
                <h4>Building</h4>
                <input/>
              </div>
              <div class='p-1'>
                <h4>Room Number</h4>
                <input/>
              </div>
            </div>
            <div class='container mx-auto px-32 flex-initial flex-col'>
              <h4>Room Type</h4>
              <select>
                <option></option>
                <option>Classroom</option>
                <option>Bathroom</option>
                <option>Principle's office</option>
              </select>
              <h4>Entry Type</h4>
              <select>
                <option></option>
                <option>Force entry</option>
                <option>...</option>
                <option>...</option>
              </select>
              <h4>Swing</h4>
              <select>
                <option></option>
                <option>Outward</option>
                <option>...</option>
                <option>...</option>
              </select>
              <h4>Door Material</h4>
              <select onChange={this.handleChange}>
                <option></option>
                <option value="Steel">Steel</option>
                <option value="Plastic">Plastic</option>
                <option value="Paper">Paper</option>
                <option>...</option>
              </select>
              <h4>Door Condition</h4>
              <select>
                <option></option>
                <option>Good</option>
                <option>...</option>
                <option>...</option>
              </select>
              <h4>Door Frame</h4>
              <select>
                <option></option>
                <option>Steal</option>
                <option>...</option>
                <option>...</option>
              </select>
              <br />
              <br />
              <div class='text-center'>
                <button class='w-64 bg-yellow hover:bg-blue-dark text-white font-bold py-2 px-4 rounded'>Submit</button>
              </div>
            </div>
          </form>
        </div>
      )
  }
}

export default SchoolSurveyForm
