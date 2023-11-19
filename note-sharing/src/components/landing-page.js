import React from 'react'
import {Link } from "react-router-dom";

export default function Landing() {
 return (
    <div className='front-page'>
        <h1 className='front-page-title'>
            Note Sharing
        </h1>
        <body>
        <Link to="/select"><button className='login-button'>
                Login
                </button></Link>
        </body>
    </div>
    )
}