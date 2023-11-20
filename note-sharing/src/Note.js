import React from 'react';
import {useState} from 'react';
import './Note.css';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'katex/dist/katex.min.css';
import katex from 'katex';
window.katex = katex;





function Note() {
  const [content, setContent] = useState('');

  const handleEditorChange = (value) => {
    setContent(value);
  };


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

  return (
    <div className="note">
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