// Import required components and modules from Firebase and Firebase Config
import firebaseConfig from "./config/Config.js"
import { getApp, initializeApp } from "firebase/app"
import { useState, useEffect } from "react"
import {
  getFirestore,
  collection,
  getDoc,
  doc,
  getDocs,
  addDoc
} from "firebase/firestore";

// import components from React.js

import { useContext } from "react";

// Import required compenets from Bootstrap and React-Boostrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import './App.css'

// Import custom contexts

import { FSContext } from ".//contexts/FSContext.js"

// declare variables

export function MyForm(props) {
  const db = useContext(FSContext)
  const [submitter, setSubmitter] = useState('');
  const [date, setDate] = useState('');
  const [context, setContext] = useState('');
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Create a function to handle the checkbox changes and update the state accordingly.
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };


  // Create a function to handle the form submission and add data to Firebase.

    const submitHandler = async (event) => {
     event.preventDefault()
     const incidents = { setSubmitter, setDate, setContext, setSelectedOptions }
     const col = collection(db, `incidents/${props.incidentId}/incident_logs`)
     const ref = await addDoc(col, incidents)
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
            <Form.Label style={{ fontSize: '30px' }}>Enter context for this ray moment:</Form.Label>
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

            <Button type="submit">Submit</Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}
export default MyForm;
