import React, { useState , useEffect} from 'react';
import Modal from './components/select-modal';
import Modalt from './components/select-modalagain';
import './Select.css';
import firestore from './firebaseConfig';
import { collection, addDoc, onSnapshot, doc , setDoc} from 'firebase/firestore'; 
//import './App.css';
//import Landing from './components/landing-page.js';
import Select from 'react-select';
import {useNavigate} from 'react-router-dom';

function SelectFile() {
    
    const [options, setOptions] = useState([
      ]);
      const navigate = useNavigate()


  const [showModal, setShowModal] = useState(false);
  const [showNotesList, setNotesList] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleOpenNotes = () => setNotesList(true);
  const handleCloseNotes = () => setNotesList(false);

  const [title, setTitle] = useState("default");

  const handleCreate = async (title) => {
    try {
      // Reference to 'texts' collection in Firestore
      const textsCollectionRef = collection(firestore, "docs");
      // Add a new document to the collection
      await addDoc(textsCollectionRef, { 
        title: title,
        content: ""
       });
      console.log("Document successfully written!");
      //<Link to='/note'></Link>
      //this.props.history.push("./note");
        navigate("/note");
    } catch (error) {
      console.error("Error writing document: ", error);
    }
  };

  useEffect(() => {
    // const col = collection(firestore, "docs");

    // const unsub = onSnapshot(collection(firestore, "docs"), (doc) => {
    //     //setOptions(["hello", doc.data()]);
    //     console.log("Current data: ", doc.data());
    // });

    onSnapshot(collection(firestore, "docs"), (snapshot) => {
        setOptions(snapshot.docs.map(doc => ({
         value: doc.data().title,
         label: doc.data().title,
        })))
      })

    },[options]);

    const load = async () => {
        const col = doc(firestore, "current", "liwZV0ADLQ5kJc05IpCd");
        await setDoc(col, {title: title});
        navigate("/note");
    }

    // const selectChange = event => {
    //     setTitle(event.target.branch.value);
    // }

  return (
    <div className="SelectScreen">
      <div className="text-container">
        <p>Select Course</p>
      </div>
      <div className="button-container">
        <button onClick={load}>Load Course Notes</button>
        <button onClick={handleOpenModal}>New Course</button>
      </div>
      <Modal show={showModal} onClose={handleCloseModal} submit={handleCreate}>
      </Modal>
      {/* <Modal show={showNotesList} onClose={handleCloseNotes} submit={handleLoad}>
        <p>Please Select</p>
      </Modal> */}
      <Select
        onChange={(choice) => setTitle(choice)}
        options={options}
      />
    </div>
  );
}

export default SelectFile;