//import React from 'react'
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
interface userdetails {
  nplace: string;
  ncounty: string;
  nzipcode: string;
  nurl: string;
}

export default function Homepage() {

  let [datab, setdatab] = useState<userdetails[]>([]);

  useEffect(() => {
    axios.get<userdetails[]>("http://localhost:8080/path").then((res => {

      setdatab(res.data);


    }));
  }, []);


  //console.log(datab);

  return (
    <div>
      <Navbar />

      <link rel="stylesheet" />
      <div className="container-fluid">
        <div className="row wrapper">
          {
            datab.map(er => (

          <><img className="img-responsive something-img" src ={er.nurl} /><div className="container">
                <div className="row overlay">
                  <div className="col-sm-9">
                    <h2>{er.nplace}</h2>
                  </div>
                  <div className="col">
                    <a>County:{er.ncounty}</a>
                  </div>
                  <div className="col-sm-3 link">
                    <a>Zipcode:{er.nzipcode}</a>
                  </div>
                </div>
              </div></>
            ))}
        </div>
      </div>
    </div>
  )
}
