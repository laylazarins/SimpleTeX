import React from 'react';
import {useState} from 'react';

import {MarkdownBlock, MarkdownSpan, MarkdownElement} from "https://md-block.verou.me/md-block.js";



function Note() {
    const [count, setCount] = React.useState("hi");
    const [title, setTitle] = React.useState("note");

    const processCurrentText = event => {
         setCount(event.target.value);
         const element = document.getElementById('textbox');
        element.mdContent = count;
      };

    return (
      <div className="Note">
        <h1>{title}</h1>
        <textarea class="input_area"
        placeholder="start typing here..."
        id = "message"
        name = "message"
        onInput = {processCurrentText}>
        </textarea> 
      <md-block id="textbox">
        "start typing!"
      </md-block>
      </div>
    );
  }

  
  export default Note;