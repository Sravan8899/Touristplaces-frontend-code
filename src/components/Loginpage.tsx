import axios from 'axios';
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router';
export default function Loginpage() {

    const [uemail, setuemail] = useState("");
    const [pname, setname] = useState("");

    console.log(pname);
    const mynav = useNavigate();
    const handleSubmit = (fa: FormEvent) => {
        fa.preventDefault();
        
        const url = "http://localhost:8080/now?";
        axios.get(url, {
            params: {
                user: uemail,
                pass: pname
            }
        }).then((res) => {
            if (res.data) {
                mynav("/Homepage");
            } 
            console.log(res.data);
        })

    };

    const handleemail = (b: any) => {

        setuemail(b.target.value);

    };
    const handlepass = (b: any) => {

        setname(b.target.value);

    };
    const handlecreate = () => {

        mynav("/Create");

    };
    return (
        <section className="h-100 gradient-form">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">

                                        <div className="text-center">

                                            <h4 className="mt-1 mb-5 pb-1">Tourist Places </h4>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            <p>Please login to your account</p>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form2Example11">Username</label>
                                                <input type="userName"
                                                    id="form2Example11"
                                                    value={uemail}
                                                    onChange={handleemail}
                                                    className="form-control"
                                                    placeholder="Phone number or email address" />
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <label className="form-label" htmlFor="form2Example22">Password</label>
                                                <input type="password"
                                                    value={pname}
                                                    onChange={handlepass}
                                                    id="form2Example22" className="form-control" />
                                            </div>

                                            <div className="text-center pt-1 mb-5 pb-1">

                                                <input
                                                    type="submit"
                                                    name="submit"
                                                    className="btn btn-info btn-md"

                                                />
                                            </div>

                                        </form>
                                        <a className="text-muted" href="#!"></a>

                                    </div>

                                    <div className="d-flex align-items-center justify-content-center pb-4">
                                        <p className="mb-0 me-2">Don't have an account?</p>
                                        <button type="button"
                                            onClick={handlecreate}
                                            data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-danger"
                                        >Create new</button>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                    <h4 className="mb-4">We are more than just a company</h4>
                                    <p className="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
