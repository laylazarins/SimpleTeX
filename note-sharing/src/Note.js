import React, { useState, useEffect } from 'react';

function Note() {

    return (
      <div className="Note">
               <textarea class="input_area"
        placeholder="start typing here...">
        {/* // oninput="processCurrentText()"
        // onfocus="startGame()">  */}
        </textarea> 
      </div>
    );
  }
  
  export default Note;