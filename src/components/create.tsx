//import React from 'react'
import { FormEvent, useState } from "react";
import axios from "axios";

export default function Create() {
    const [user1, setuname] = useState("");
    const [pass1, setupass] = useState("");

    const handleuname = (e: any) => {

        setuname(e.target.value);

    };
    const handlepass = (n: any) => {

        setupass(n.target.value);

    };

    
     const details = {user1, pass1};
    const handleSubmit = (tr: FormEvent) => {

        tr.preventDefault();
        try {
            console.log(details);
            axios.post("http://localhost:8080/add/user", details).then((res) => {

                console.log(res.data);
            })
        }
        catch (error) {
            console.log("problem");
        }

    };
    return (
        <div>
            <h3 className="text-center text-white pt-5">ADD NEW Place</h3>
            <div className="container">
                <div
                    id="login-row"
                    className="row justify-content-center align-items-center"
                >
                    <div id="login-column" className="col-md-6">
                        <div id="login-box" className="col-md-12">
                            <form onSubmit={handleSubmit}>
                                <h3 className="text-center text-info">Add New Places</h3>
                                <div className="form-group">
                                    <label className="text-info">UserName</label>
                                    <input
                                        type="text"
                                        value={user1}
                                        onChange={handleuname}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-info">Password</label>
                                    <input
                                        type="password"
                                        value={pass1}
                                        onChange={handlepass}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label className="text-info"></label>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="submit"
                                        name="submit"
                                        className="btn btn-info btn-md"
                                        value="Create"
                                    />
                                </div>
                                <a className="nav-item nav-center" href="/">Click here to Login</a>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
