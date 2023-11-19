import React from 'react';
import {MarkdownBlock, MarkdownSpan, MarkdownElement} from "md-block";



function Note() {
    const [count, setCount] = React.useState("hi");

    const processCurrentText = () => {
         setCount("hello");
      };

    return (
      <div className="Note">
        <textarea class="input_area"
        placeholder="start typing here..."
        onInput= {processCurrentText}>
        </textarea> 
        <button type="button" onClick={processCurrentText}>
        Click Me
      </button>
      <p>{count}</p>
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