import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";

const Login = ()=> {
    const [personList, setPersonList] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/person')
            .then(res=>{
                setPersonList(res.data);
            });
    },[])

    return (
        <div className="container py-4">
            <Link to={'/'}><h2>Heladeria Jean Pierre's</h2></Link>
            <h4>Usuarios Registrados</h4>
            <table className="table table-hover"> 
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Address</th>

                    </tr>
                </thead>
                <tbody>
                    { personList.map((person, idx)=>{
                        return <tr key={idx} >
                                    <td >{person.firstName}</td>
                                    <td >{person.lastName}</td>
                                    <td >{person.address}</td>
                                    <td ><Link to={'/' }>
                                            Ingresar
                                        </Link></td>
                                </tr>

                    })}
                </tbody>

            </table>
        </div>
    )
}
export default Login;