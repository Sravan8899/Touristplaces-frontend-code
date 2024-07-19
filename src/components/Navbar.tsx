//import React from 'react'

import { useNavigate } from "react-router";

export default function Navbar() {
    const logout=useNavigate();
    const handlelogout=()=>{
      logout("/");

    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/Homepage">Home</a>
                        <a className="nav-item nav-link" href="https://travel.usnews.com/rankings/best-usa-vacations/">Features</a>
                        <a className="nav-item nav-link" href="/addnew">Add a New Place</a>
                        <a className="nav-item nav-link" href="/contacus">Contact Us</a>
                        <button onClick={handlelogout}>Logout</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
