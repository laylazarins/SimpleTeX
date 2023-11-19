import React from 'react'
import { Link } from "react-router-dom";
import github from "./images/github_icon.png";

export default function FrontPage() {
 return (
    <div className='front-page'>
        <h1 className='front-page-title'>
            Note Sharing
        </h1>
        <body>
        <Link to="/signin"><button className='login-button'>
                Get Started!
                </button></Link>
        </body>
        <div className='media-list'>
            <ul>
                <li className="sociallist">
                    <a href="https://github.com/JerryQii/hackcamp-pj/" target="_blank">
                    GitHub Repository
                    <img className="sociallogo" src={github} alt="GitHub">
                    </img>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    )
}