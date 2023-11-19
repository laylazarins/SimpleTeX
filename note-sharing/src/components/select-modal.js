import './select-modal.css'; // Import your Modal CSS

const Modal = ({ show, children, onClose, submit}) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
        <input type="text" placeholder="title" />
        <button onClick={submit}>Create</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default Modal;