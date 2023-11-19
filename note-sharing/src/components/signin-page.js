import React from 'react'

export default function SignIn() {
    return(
    <div className="signin-page">
      <h1>My Awesome App 🔥</h1>

      <section id="whenSignedOut">
  
        <button id="signInBtn" class="btn btn-primary" onclick = "googleLogin()" >Sign in with Google!</button>
  
      </section>
  
      <section id="whenSignedIn" hidden="true">
  
        <div id="userDetails"></div>
  
        <button id="signOutBtn" class="btn btn-primary">Sign Out</button>
  
      </section>
  
  
    <section>
  
      <h2>My Firestore Things</h2>
  
      <ul id="thingsList">
  
      </ul>
  
      <button id="createThing" class="btn btn-success">Create Random Thing</button>
  
    </section>
    </div>
    );
}