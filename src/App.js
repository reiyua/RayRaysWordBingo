// Import required components and modules from Firebase and Firebase Config
import { firebaseConfig } from "./config/Config.js"
import { getApp, initializeApp } from "firebase/app"
import { useState, useEffect } from "react"
import { getApps } from "firebase/app";
import {
  getFirestore,
  collection,
  getDoc,
  doc,
  getDocs,
  addDoc
} from "firebase/firestore";

// Import required compenets from Bootstrap and React-Boostrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import './App.css'

if (!getApps().length) {
  initializeApp(firebaseConfig);
 }






// declare variables

export function MyForm(props) {
  const [submitter, setSubmitter] = useState('');
  const [date, setDate] = useState('');
  const [context, setContext] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [incidents, setIncidents] = useState([]); // Declare incidents as an empty array

  // Ensure Firebase is initialized before using it
if (!getApp().length) {
  initializeApp(firebaseConfig);

}

const db = getFirestore(getApp());


  // Create a function to handle the checkbox changes and update the state accordingly.
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };


  // Create a function to handle the form submission and add data to Firebase. NOT WORKING

    const submitHandler = async (event) => {
     event.preventDefault()
     const incidentsData = { submitter, date, context, selectedOptions } // Use the state variables directly
     const col = collection(db, `incidents`)
     const ref = await addDoc(col, incidentsData)
     console.log(ref)
   }

  // Create form for user to imput data
  return (
    <div style={{ backgroundColor: '#FBC40E' }}>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label style={{ fontSize: '40px' }}>Ray Ray's Word Bingo</Form.Label>
          <Col sm={2}></Col>
          <Col sm={8}>
            <Form.Label style={{ fontSize: '30px' }}>Enter submitter name:</Form.Label>
            <Form.Control
              name="submitter"
              type="text"
              placeholder="Name"
              value={submitter}
              onChange={(e) => setSubmitter(e.target.value)}
            />
            <Form.Label style={{ fontSize: '30px' }}>Enter the date the shennanigans occurred (dd-mm-yyyy):</Form.Label>
            <Form.Control
              name="date"
              type="text"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Form.Label style={{ fontSize: '30px' }}>Enter context for this Ray moment:</Form.Label>
            <Form.Control
              type="text"
              name="context"
              placeholder="Enter context here"
              value={context}
              onChange={(e) => setContext(e.target.value)}
            />
            <Form.Label
              name="selectedoptions"
              style={{ fontSize: '30px' }}>Select the words used by Ray during this Ray moment:
            </Form.Label>
            <Form.Check
              type="checkbox"
              label="poop"
              value="poop"
              checked={selectedOptions.includes('poop')}
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type="checkbox"
              label="snot"
              value="snot"
              checked={selectedOptions.includes('snot')}
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type="checkbox"
              label="brain"
              value="brain"
              checked={selectedOptions.includes('brain')}
              onChange={handleCheckboxChange}
            />
            <Form.Check
              type="checkbox"
              label="fart"
              value="fart"
              checked={selectedOptions.includes('fart')}
              onChange={handleCheckboxChange}
            />

<Form.Check
              type="checkbox"
              label="sus"
              value="sus"
              checked={selectedOptions.includes('sus')}
              onChange={handleCheckboxChange}
            />

<Form.Check
              type="checkbox"
              label="fr fr"
              value="fr fr"
              checked={selectedOptions.includes('fr fr')}
              onChange={handleCheckboxChange}
            />

<Form.Check
              type="checkbox"
              label="balls"
              value="balls"
              checked={selectedOptions.includes('balls')}
              onChange={handleCheckboxChange}
            />


            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>



        <Form.Group>
          <Form.Label style={{ fontSize: '30px' }}>Existing entries</Form.Label>
          <p>Check here for existing entries:</p>
          <p>Code added, work in progress to add said incidents to Firestore.</p>
          <h2>Incidents in the Database:</h2>
          {incidents.map((incident) => (
            <div key={incident.id}>
              <p>Submitter: {incident.submitter}</p>
              <p>Date: {incident.date}</p>
              <p>Context: {incident.context}</p>
              <p>Selected Options: {incident.selectedOptions.join(", ")}</p>
            </div>
          ))}
        </Form.Group>
      </Form>
    </div>
// Create a form group to display the existing entries in the database.        
  );
}
export default MyForm;
