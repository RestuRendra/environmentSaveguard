import React from "react";
import "./../index.css";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <>
      <section id="signin">
        <div class="container">
          <div class="container-form">
            <form>
              <div class="biodata">
                <h1>Welcome Back</h1>
                <h4>Register your account</h4>

                <label for="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email address" />

                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Enter your password" />
              </div>

              <button>
                <Link to="home.html">Login</Link>
              </button>

              <div class="remfp">
                <div class="checkbox">
                  <input type="checkbox" id="hobi1" name="hobi" value="membaca" />
                  <label for="hobi1">Remimber Me</label>
                  <br />
                </div>
                <Link to="forgot-password.html">Forgot Password?</Link>
              </div>

              <div class="signup">
                <p>Don't have an account?</p>
                <Link to="/signup">Sign up</Link>
              </div>
            </form>
            <div class="welcome">
              <h1>Hello Guardians!</h1>
            </div>
            <div class="gambar">
              <img src="Gambar 1.png" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Signin;
