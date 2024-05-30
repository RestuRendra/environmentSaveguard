import React from "react";
import "./../index.css";

function Verify() {
  return (
    <>
      <section id="verify">
        <div className="container">
          <div className="left-side">
            <img src="Forgot.png" alt="Image" className="rotate" />
          </div>
          <div className="right-side">
            <h2>
              <span>Verify</span> Code
            </h2>
            <p>Enter the verification code that has been sent to your email</p>
            <form>
              <div className="input-field">
                <input type="number" disabled />
                <input type="number" disabled />
                <input type="number" disabled />
                <input type="number" disabled />
              </div>
              <a href="reset-password.html" className="button">
                Send
              </a>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Verify;
