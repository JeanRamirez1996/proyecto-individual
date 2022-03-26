import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Header from '../components/Header';

const Purchase = ()=> {

    const [orderList, setOrderList] = useState([]);
    const [delivery, setDelivery] = useState(false);
    const [deliveryFee, setDeliveryFee] = useState(0);
    const [nameList, setNameList] = useState([]);
    let price=0;
    let tax=0;
    let finalPrice=0;

    useEffect(()=>{
        axios.get('http://localhost:8000/api/cart')
        .then(res=>{
            setOrderList(res.data);
        });
    },[])

    const onPickup= e =>{
        setDelivery(false) 
        setDeliveryFee(0)
    }
    const onDelivery = e =>{
        setDelivery(true) 
        setDeliveryFee(3)
    }

    const onSubmit = e => {
        
        orderList.map((order)=>{nameList.push(order.name)})
        
        axios.post('http://localhost:8000/api/new_order', {
            nameList,
            finalPrice
        })
            .then(res=>{
                console.log(res)
            })

        axios.delete('http://localhost:8000/api/delete_cart')
            .then(res => {
                console.log(res)
            })
    }

    function priceDecimal(number){
        return Number.parseFloat(number).toFixed(2);
    }

    function taxDecimal(tax){
        tax = price*0.12
        return Number.parseFloat(tax).toFixed(2);
    }

    function FinalPrice(price,tax,deliveryFee){
        tax = price*0.12;
        finalPrice = price + tax + deliveryFee;
        finalPrice = Number.parseFloat(finalPrice).toFixed(2);
        return finalPrice
    }

    return (
        <div className="container py-4" >
            <Header/>
            <h4 className="d-flex flex-row mx-4">Compra</h4>
            
            <div className='w-50 mx-auto'>
                <h5>Orden:</h5>
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                { orderList.map((order, idx)=>{
                        return <tr key={idx} >
                                    <td >
                                        {order.name}
                                    </td>
                                    <td >
                                        {order.price}
                                    </td>
                                </tr>
                        })}
                    </tbody>
                </table>

                { orderList.map((order)=>{price=price+order.price})}
                <p> Subtotal: {priceDecimal(price)}</p>

                <hr></hr>

                    <h5>Opcion de Entrega o Retiro</h5>
                    <form>
                        <input onClick = {onDelivery} className="form-check-input" type="radio" id="metodo1" name="metodo" value="delivery"/>
                        <label className="form-check-label" htmlFor="metodo1"> Entregar </label> 
                        &nbsp;&nbsp;&nbsp; 
                        <input onClick = {onPickup} type="radio" id="metodo2" name="metodo" value="pickup"/>
                        < label htmlFor="metodo2"> Retirar</label>
                    </form>

                {
                    delivery && <div> 
                                    <h5>Informacion de Entrega</h5>
                                    <p className="col-md-12">
                                        <label className="form-label">Direccion: </label><br/>
                                        <input className="form-control" type="text" />
                                    </p>
                                </div>
                }

                <hr></hr>
                <h5>Impuestos y Precio Final</h5>
                <p>IVA: {taxDecimal(tax)}</p>
                { delivery && <p>Cobro por entrega: {deliveryFee}</p>}
        
                <p>Precio Final: {FinalPrice(price,tax,deliveryFee)} </p>


                <Link to={'/account'}><button onClick = {onSubmit} className="btn btn-primary" >Buy Items</button></Link>
            </div>
        </div>
    )
}
export default Purchase;