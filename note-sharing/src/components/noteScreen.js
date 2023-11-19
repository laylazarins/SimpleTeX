import React from 'react';
import { socket } from '../socket';

export function ConnectionManager() {
  function connect() {
    console.log("connected");
    socket.connect();
  }

  function disconnect() {
    socket.disconnect();
  }

  return (
    <>
      <button onClick={ connect }>Connect</button>
      <button onClick={ disconnect }>Disconnect</button>
    </>
  );
}


export function ConnectionState({ isConnected }) {
    return <p>State: { '' + isConnected }</p>;
}
