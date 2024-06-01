import React from "react";
import "./../index.css";
import { Link } from "react-router-dom";

function Forgot() {
  return (
    <>
      <section id="forgot">
        <div class="container">
          <div class="left-side">
            <img src="Password/Forgot.png" alt="Forgot Image" class="forgot-image" />
          </div>
          <div class="right-side">
            <h2>Forgot Password?</h2>
            <p>Enter your e-mail address to get a verification code.</p>
            <form>
              <div class="input-container">
                <input type="email" placeholder="Enter your email address" required />
                <i class="fa-regular fa-envelope"></i>
              </div>
              <button type="submit">Next</button>
              <p class="back-to-signin">
                <Link to="/signin">
                  Back to <span>Sign In</span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Forgot;
