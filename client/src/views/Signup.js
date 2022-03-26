import React, { useState } from 'react'
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";


const Signup = ()=> {

    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState(""); 
    let navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/new_person', {
            firstName,
            lastName,
            address

        })
            .then(res=>{
                console.log(res)
                navigate("/login")
            })
    }

    return (
        <div className="container py-4">
            <Link to={'/'}><h2>Heladeria Jean Pierre's</h2></Link>
            <h4>Sign Up</h4>
            <form onSubmit={onSubmitHandler} className="row g-3">

                <p className="col-md-6">
                    <label className="form-label">First Name: </label><br/>
                    <input className="form-control" type="text" onChange = {(e)=>setFirstName(e.target.value)}/>
                </p>
                <p className="col-md-6">
                    <label className="form-label">Last Name:</label><br/>
                    <input className="form-control" type="text" onChange = {(e)=>setLastName(e.target.value)}/>
                </p>
                <p className="col-md-12">
                    <label className="form-label">Address: </label><br/>
                    <input className="form-control" type="text" onChange = {(e)=>setAddress(e.target.value)}/>
                </p>

                <p>
                    <button className="btn btn-primary"> Add User </button>    
                </p>
        </form>
       
        </div>
    )
}
export default Signup;