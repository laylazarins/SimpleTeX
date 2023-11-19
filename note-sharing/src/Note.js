import React from 'react';
import {useState} from 'react';

import {MarkdownBlock, MarkdownSpan, MarkdownElement} from "https://md-block.verou.me/md-block.js";



function Note() {
    const [count, setCount] = React.useState("hi");

    const processCurrentText = event => {
         setCount(event.target.value);
      };
    const renderText = () => {
        const element = document.getElementById('textbox');
        element.mdContent = count;
    }

    return (
      <div className="Note">
        <textarea class="input_area"
        placeholder="start typing here..."
        id = "message"
        name = "message"
        onInput = {processCurrentText}>
        </textarea> 
        <button type="button" onClick={renderText}>
        Render
      </button>
      <md-block id="textbox">
        "start typing!"
      </md-block>
        {/* <input
      onFocus={(e) => {
        console.log('Focused on input');
      }}
      placeholder="onFocus is triggered when you click this input."
    /> */}
      </div>
    );
  }

  
  export default Note;