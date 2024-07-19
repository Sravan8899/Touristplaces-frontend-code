import { FormEvent, useEffect, useState } from 'react'

import Navbar from "./Navbar";
import axios from 'axios';

export default function Addnewplaces() {
  const[nplace, setnplace]=useState("");
  const[ncounty, setncounty]=useState("");
  const[nzipcode, setnzipcode]=useState("");
  const[nurl, setnurl]=useState("");
  const[add, setadd]=useState("");
  const handleplace=(r:any)=>{

    setnplace(r.target.value);
  };
  const handlecounty=(t:any)=>{

      setncounty(t.target.value);
  };
  const handlezipcode=(g:any)=>{

    setnzipcode(g.target.value);
  };
  const handleurl=(g:any)=>{

  setnurl(g.target.value);
  };
  const places={nplace, ncounty,nzipcode, nurl};
  const handleform=(d:FormEvent)=>{
    d.preventDefault();
    console.log(nurl);
axios.post("http://localhost:8080/addplace", places).then((res=>{

  console.log(res.data);
  setadd("added successfully");

}));
    
  };
  useEffect(()=>{

  })
  return (
    <div>
      <Navbar />
      <form className="container" onSubmit={handleform}>
        <p>Add new places</p>

        <div data-mdb-input-init>
          <label className="form-label" htmlFor="form2Example11">PlaceName</label>
          <input type="Text"
          value={nplace}
          onChange={handleplace}
            id="form2Example11"

            className="form-control"
            placeholder="place name" />
        </div>

        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example22">County</label>
          <input type="text"
          value={ncounty}
          onChange={handlecounty}
              placeholder="Enter county"
            id="form2Example22" className="form-control" />
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example22">Zipcode</label>
          <input type="text"
          value={nzipcode}
          onChange={handlezipcode}
              placeholder="Enter zipcode"
            id="form2Example22" className="form-control" />
        </div>
        <div data-mdb-input-init className="form-outline mb-4">
          <label className="form-label" htmlFor="form2Example22">URL</label>
          <input type="link"
          value={nurl}
          onChange={handleurl}
              placeholder="Enter image link"
            id="form2Example22" className="form-control" />
        </div>
        <div className="text-center pt-1 mb-5 pb-1">

          <input
            type="submit"
            name="Add"
            className="btn btn-info btn-md"

          />
        </div>
        <a className="nav-item nav-center">{add}</a>

      </form>
    </div>
  )
}
