import React, { useState, useEffect } from 'react';
import { socket } from './socket';
import { ConnectionManager } from './components/noteScreen';
import { ConnectionState } from './components/noteScreen';
import {Link } from "react-router-dom";


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