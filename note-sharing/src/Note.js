import React, { useState, useEffect } from 'react';
import { socket } from './socket';
import { ConnectionManager } from './components/noteScreen';
import { ConnectionState } from './components/noteScreen';
import {Link } from "react-router-dom";


function Note() {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [fooEvents, setFooEvents] = useState([]);

  useEffect(() => {
    function onConnect() {
        console.log("hello");
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onFooEvent(value) {
      setFooEvents(previous => [...previous, value]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);

  function connect() {
    console.log("connected");
    socket.connect();
  }

  function disconnect() {

    socket.disconnect();
  }

    return (
    //   <div className="Note">
    //            <textarea class="input_area"
    //     placeholder="start typing here...">
    //     {/* // oninput="processCurrentText()"
    //     // onfocus="startGame()">  */}
    //     </textarea> 
    //     <p>State: { '' + isConnected }</p>
    //   </div>
    <div className="App">
       <button onClick={ connect }>Connect</button>
      <button onClick={ disconnect }>Disconnect</button>
      <p>State: { '' + isConnected }</p>
    </div>
    );
  }
  
  export default Note;