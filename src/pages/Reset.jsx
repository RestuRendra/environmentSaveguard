import React from "react";
import "./../index.css";

function Reset() {
  return (
    <>
      <section id="reset">
        <div class="container">
          <div class="left-side">
            <img src="Password/Forgot.png" alt="Forgot Image" class="forgot-image" />
          </div>
          <div class="right-side">
            <h2>
              <span>Reset</span> Password
            </h2>
            <p>Enter your new password</p>
            <form>
              <div class="input-field">
                <input type="password" placeholder="Enter your password" />
                <span class="toggle-password">
                  <i class="fa-regular fa-eye-slash"></i>
                </span>
              </div>
              <button type="submit">Reset Password</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Reset;
