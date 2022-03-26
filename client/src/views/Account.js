import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Header from '../components/Header';

const Account = ()=> {
    const [orderList, setOrderList] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/order')
        .then(res=>{
            setOrderList(res.data);
            console.log(res.data)
        });
    },[])

    return (
        <div className="container py-4">
            <Header/>

            <h4 className="d-flex flex-row mx-4">Ordenes</h4>
            <table className="table table-striped table-sm w-75 mx-auto">
                <thead>
                    <tr>
                        <th>N.</th>
                        <th>Orden</th>
                        <th>Precio Final</th>
                    </tr>
                </thead>
                <tbody>
                    { orderList.map((orden, idx)=>{
                         return <tr key={idx} >
                                    <td >
                                        {idx+1}
                                    </td>
                                    <td >
                                        {`${orden.nameList}`}
                                    </td>
                                    <td >
                                        {orden.finalPrice}                                  
                                    </td>
                                </tr>
                    })}
                </tbody>
            </table>

        </div>
    )
}
export default Account;