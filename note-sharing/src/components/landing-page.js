import React from 'react'
import {Link } from "react-router-dom";

export default function Landing() {
 return (
    <div className='front-page'>
        <title>
            Note Sharing
        </title>
        <body>
        <Link to="/select"><button className='login'>
                Login
                </button></Link>
        </body>
    </div>
 )
}