import React from "react";
import "./../index.css";
import { Link } from "react-router-dom";

function Profil() {
  return (
    <>
      <section id="profil">
        <div class="profilpage">
          <nav class="navbar">
            <div class="navbar-left">
              <img src="profil/Logo.png" alt="Logo" class="logo" />
            </div>
            <div class="navbar-right">
              <img src="profil/profil.png" alt="Profile" class="profile-pic" />
              <span class="welcome-text">
                Welcome Back! <span id="username">UserName</span>
              </span>
            </div>
          </nav>
        </div>

        <section class="my-profil">
          <section class="small-container">
            <Link to="/profil" class="profile-link">
              <i class="far fa-user"></i> My Profile
            </Link>
            <Link to="/" class="logout-link">
              <i class="fa-solid fa-arrow-right-from-bracket"></i>Log Out
            </Link>
          </section>

          <section class="large-container">
            <div class="profile-info">
              <div class="profile-image">
                <i class="fa-solid fa-arrow-left"></i>
                <img src="profil/profill.png" alt="Foto" class="foto-profil" />
              </div>
              <div class="profile-details">
                <h2>Rabia Iskar</h2>
                <p>rabiaiskar1@gmail.com</p>
              </div>
            </div>
            <div class="edit-button">
              <button>Edit</button>
            </div>
            <form>
              <fieldset>
                <label htmlFor="full-name">Full Name</label>
                <input type="text" id="full-name" name="full-name" placeholder="Enter your full name" required />
                <br />
                <br />

                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Choose a username" required />
                <br />
                <br />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email address" required />
                <br />
                <br />
              </fieldset>
            </form>
          </section>
        </section>
      </section>
    </>
  );
}

export default Profil;
