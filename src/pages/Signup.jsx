import React from "react";
import "./../index.css";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <section id="signup">
        <div class="container">
          <div class="container-form">
            <div class="welcome">
              <h1>Welcome to Environment Website</h1>
            </div>
            <div class="gambar">
              <img src="Gambar 1.png" alt="" />
            </div>
            <form action="">
              <div class="biodata">
                <h1>Create Account</h1>
                <label for="username">Username</label>
                <input type="text" id="username" placeholder="Enter Your Name" />

                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email address" />

                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" />
              </div>
              <Link to="/signin" className="button">
                Create Account
              </Link>

              <div class="signin">
                <p>Already have an account?</p>
                <Link to="/signin">Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signup;
