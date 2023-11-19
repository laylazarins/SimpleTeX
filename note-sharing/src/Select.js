import React, { useState } from 'react';
import Modal from './components/select-modal'; // Import the Modal component
import './Select.css';

function Select() {
  const [showModal, setShowModal, showNotesList] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="SelectScreen">
      <div className="text-container">
        <p>Load Note</p>
      </div>
      <div className="button-container">
        <button onClick={showNotesList}>Load from File</button>
        <button onClick={handleOpenModal}>New File</button>
      </div>
      <Modal show={showModal} onClose={handleCloseModal}>
        <p>Please enter a title:</p>
      </Modal>
    </div>
  );
}

export default Select;
