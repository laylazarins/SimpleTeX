import './select-modal.css'; // Import your Modal CSS
import React, { useState, useEffect } from 'react';
// import app from '../firebaseConfig';
import '../firebaseConfig';
import {database} from '../firebaseConfig';
import { onValue, addDoc, collection, getDocs} from "firebase/firestore";

// export default function m() {


//   return (
//     <div className="modal-backdrop">
//       <div className="modal-content">
//         <textarea type="text" placeholder="default">default</textarea>
//         <button onClick={CreateNote(title)}>Create</button>
//       </div>
//     </div>
//   );
// };
