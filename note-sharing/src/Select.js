import React, { useState } from 'react';
import Modal from './components/select-modal';
import './Select.css';
import firestore from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore'; 
//import './App.css';
//import Landing from './components/landing-page.js';

function Select() {
  const [showModal, setShowModal, showNotesList] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleCreate = async (title) => {
    try {
      // Reference to 'texts' collection in Firestore
      const textsCollectionRef = collection(firestore, 'texts');
      // Add a new document to the collection
      await addDoc(textsCollectionRef, { 
        title: title,
        content: ""
       });
      console.log("Document successfully written!");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  return (
    <div className="SelectScreen">
      <div className="text-container">
        <p>Load Note</p>
      </div>
      <div className="button-container">
        <button onClick={showNotesList}>Load from File</button>
        <button onClick={handleOpenModal}>New File</button>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} submit={handleCreate}>
        <p>Please enter a title:</p>
      </Modal>
    </div>
  );
}

export default Select;
