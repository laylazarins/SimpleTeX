import React from 'react';
import {useState} from 'react';
import firestore from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore'; 
import './Note.css';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'katex/dist/katex.min.css';
import katex from 'katex';
import {useNavigate} from 'react-router-dom';
import { Link } from "react-router-dom";

window.katex = katex;







function Note(document) {
  const [content, setContent] = useState('');
  const handleEditorChange = (value) => {
    setContent(value);
  };
  const title = "title";
  const navigate = useNavigate();



  var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript

  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['link','image','formula'],
  ['clean']
  ];

  function save() {
    // TODO
  }

  return (
    
    <div className="note">
      <h1 className="title">
        {title}
      <button className="save-button" 
        onClick={save()}>
        Save Notes 
      </button>
      <Link to="/select">
      <button className="exit-button">
        select course
        </button>
        </Link>
      </h1>
      <ReactQuill className="editor"
      theme = 'snow'
        value= {content}
        onChange={handleEditorChange}
        placeholder= "Start typing here..."
        modules={{
          toolbar: toolbarOptions,
          formula: true
        }}
      />
    </div>
    
  );
}


  
  export default Note;