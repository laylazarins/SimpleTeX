import './select-modal.css'; // Import your Modal CSS
import React, { useState, useEffect } from 'react';
// import app from '../firebaseConfig';
import '../firebaseConfig';
import {database} from '../firebaseConfig';
import { onValue, addDoc, collection, getDocs} from "firebase/firestore";

const Modal = ({ show, children, onClose, submit}) => {
  const [title, setTitle] = useState("default");

  if (!show) {
    return null;
  }

  const UsersCollectionRef = collection(database, "backenddata")

  const CreateNote = async (title) => {
      await addDoc(UsersCollectionRef, { Title: title, Content: ""})
      window.location.reload()
  }

  const changeTitle = event => {
    setTitle(event.target.value);
  }


  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
        <input type="text" placeholder="default" onInput = {changeTitle} />
        <button onClick={CreateNote(title)}>Create</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;