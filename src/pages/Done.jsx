import React from "react";
import "./../index.css";

function Done() {
  return (
    <>
      <section id="Done">
        <div className="background-2">
          <div className="container">
            <img src="Password/Baground.png" alt="Baground Image" class="baground-image" />
            <div className="icon-container">
              <img src="Password/Done.png" alt="Done Icon" class="icon" />
              <p className="message">Password Changed Successfully!</p>
              <a href="login.html" className="back-to-login">
                Back to <span className="Signin-text">Sign In</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Done;
