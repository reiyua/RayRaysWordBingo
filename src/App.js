import { firebaseConfig } from "./config/Config.js"
import { getApp, initializeApp } from "firebase/app"
import { useState, useEffect } from "react"
import { getFirestore,
  collection,
   getDoc,
    doc,
     getDocs } from "firebase/firestore";
     import {getStorage} from "firebase/storage"
     import Form from 'react-bootstrap/Form';
     import Button from 'react-bootstrap/Button';
     import 'bootstrap/dist/css/bootstrap.min.css';
     import Col from 'react-bootstrap/Col';

     import './App.css'



    function MyForm() {
      const [selectedOptions, setSelectedOptions] = useState([]);

      const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
          setSelectedOptions([...selectedOptions, value]);
        } else {
          setSelectedOptions(selectedOptions.filter((option) => option !== value));
        }
      };

      return (
        <Form>
          <Form.Group>
          <Col sm={2}></Col>
         <Col sm={8}>
          <Form.Label style={{ fontSize: '30px' }}>Enter submitter name:</Form.Label>
          <Form.Control type="text" 
                        placeholder="Name" /> 
          <Form.Label style={{ fontSize: '30px' }}>Enter the date the shennanigans occurred (dd-mm-yyyy):</Form.Label> 
          <Form.Control type="text" placeholder="Date" /> 
            <Form.Label style={{ fontSize: '30px' }}>Select the words used by Ray:</Form.Label>
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
             </Col>
     <Col sm={2}></Col>
          </Form.Group>
          
          <Button variant="primary" type="submit"> 
           Submit
        </Button> 
        </Form>
      );
    }

    export default MyForm;
