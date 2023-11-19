import React, { useState } from 'react';
import './select-modal.css'; // Import your Modal CSS

const Modal = ({ show, onClose, submit }) => {
  const [title, setTitle] = useState(''); // State to store the input value

  const handleInputChange = (e) => {
    setTitle(e.target.value); // Update the state on input change
  };

  const handleSubmit = () => {
    submit(title); // Call the submit function passed as a prop with the input value
    setTitle(''); // Optionally clear the input field after submit
    onClose(); // Close the modal
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <input
          type="text"
          placeholder="title"
          value={title}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Create</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;
