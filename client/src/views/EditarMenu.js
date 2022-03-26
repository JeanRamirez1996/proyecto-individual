import React, { useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Header from '../components/Header';


const EditarMenu = ()=> {

    const [name, setName] = useState(""); 
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState(""); 
    let navigate = useNavigate();

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/new_food', {
            name,
            type,
            price,
            description

        })
            .then(res=>{
                console.log(res)
                navigate("/order")
            })
    }

    return (
        <div className="container py-4 w-75">
            <Header/>
            <h4 className="d-flex flex-row mx-4">Agregar Plato</h4>
            <form onSubmit={onSubmitHandler} className="row g-3">

                <p className="col-md-4">
                    <label className="form-label">Nombre: </label><br/>
                    <input className="form-control" type="text" onChange = {(e)=>setName(e.target.value)}/>
                </p>
                <p className="col-md-4">
                    <label className="form-label">Tipo:</label><br/>
                    <input className="form-control" type="text" onChange = {(e)=>setType(e.target.value)}/>
                </p>
                <p className="col-md-4">
                    <label className="form-label">Precio:</label><br/>
                    <input className="form-control" type="text" onChange = {(e)=>setPrice(e.target.value)}/>
                </p>
                <p className="col-md-12">
                    <label className="form-label">Description: </label><br/>
                    <input className="form-control" type="text" onChange = {(e)=>setDescription(e.target.value)}/>
                </p>
                <p>
                    <button className="btn btn-primary"> Agregar Plato </button>    
                </p>
        </form>
       
        </div>
    )
}
export default EditarMenu;