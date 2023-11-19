import React, { useState } from 'react';
import m from './components/select-modal';
import './Select.css';
//import './App.css';
//import Landing from './components/landing-page.js';
import './firebaseConfig';
import {database} from './firebaseConfig';
import { onValue, addDoc, collection, getDocs, doc} from "firebase/firestore";
import { Link } from "react-router-dom";

function Select() {
  const [title, setTitle] = useState("default");

  const changeTitle = event => {
    setTitle(event.target.value);
  }

  const CreateNote = async () => {
    const UsersCollectionRef = collection(database, title)
    await addDoc(UsersCollectionRef, {Content: ""})
    //const res = await database.collection('title').doc(title).set("");
      
  }

  return (
    <div className="SelectScreen">
      <div className="text-container">
        <p>Load Note</p>
        </div>
        <textarea type="text"></textarea>
        <Link to='/note'><button onClick={CreateNote}>Create</button></Link>
    </div>
  );
}

export default Select;
