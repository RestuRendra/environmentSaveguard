import React from "react";
import gambar1 from "./assets/Forgot.png";
import "./index.css";

function Verify() {
  return (
    <>
      <section id="verify">
        <div className="container">
          <div className="left-side">
            <img src={gambar1} alt="Image" className="rotate" />
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
              <a href="reset-password.html" class="button">
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
