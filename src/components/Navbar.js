import React from 'react';
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import {
  Link
} from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <div>
        <BsFillEmojiSunglassesFill/>
       Navbar
      </div>
      <div className="navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav d-flex gap-4 me-auto mb-2 mb-lg-0">
          <li className="nav-item">
          <Link ClassName="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
          <Link ClassName="nav-link active" to="/about">About</Link>
          </li>
          <li className="nav-item">
          <Link ClassName="nav-link active" to="/register">Register</Link>
          </li>
          <li className="nav-item">
           <Link  ClassName="nav-link active" to="/login">Login</Link>
          </li>
          <li className="nav-item">
           <Link  ClassName="nav-link active" to="/becomeahost">Become a Host</Link>
          </li>
        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  
  )
}

export default Navbar




