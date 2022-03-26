import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import Header from '../components/Header';

const Order = ()=> {
    const [foodList, setFoodList] = useState([]);
    const [cartList, setCartList] = useState([]);
    const [loaded, setLoaded] = useState('helado');
    const [foodCar, setFoodCar] = useState([]);
    const [name, setName] = useState([]);
    const [type, setType] = useState([]);
    const [price, setPrice] = useState([]);
    const purchased = true;

    useEffect(()=>{
        axios.get('http://localhost:8000/api/food')
            .then(res=>{
                setFoodList(res.data);
            });
        axios.get('http://localhost:8000/api/cart')
            .then(res=>{
                setCartList(res.data);
            });
    },[])

    const onSubmit = e => {
            axios.post('http://localhost:8000/api/new_cart', {
                name,
                type,
                price,
                purchased
            })
                .then(res=>{
                    console.log(foodCar)
                    console.log(res)
                })
            
            axios.get('http://localhost:8000/api/cart')
                .then(res=>{
                    setCartList(res.data);
                });
                

    }

    function onSubmitHandler(food) {
        
        setName(food.name)
        setType(food.type)
        setPrice(food.price)
        setFoodCar(food)
        console.log(foodCar) 
    }

    const deleteItem = (orderId) => {
        axios.delete('http://localhost:8000/api/delete_cart_item/' + orderId)
            .then(res => {
                setCartList(cartList.filter(order => order._id !== orderId));
            })
    }

    return (
        <div className="container py-4">  
            <Header/>

            <h4 className="d-flex flex-row mx-4">Menu</h4>

            <ul className="nav nav-tabs ">
                <li className="nav-item">
                    <button className="nav-link" onClick={(e)=>setLoaded('helado')}>Helado</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" onClick={(e)=>setLoaded('postre')}>Postre</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" onClick={(e)=>setLoaded('desayuno')}>Desayuno</button>
                </li>
            </ul>
            <table className="table table-striped table-sm w-75 ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>

                    { loaded==='helado' && foodList.filter((food)=>{
                        return (food.type === 'helado')
                    }).map((food, idx)=>{

                        return <tr key={idx} onMouseOver={(e)=> onSubmitHandler(food)} onClick={onSubmit}>
                            <td >{food.name}</td>
                            <td >{food.price}</td>
                            <td>{food.description}</td>
                    </tr>
                    })}    

                    { loaded==='postre' && foodList.filter((food)=>{
                        return (food.type === 'postre')
                    }).map((food, idx)=>{
                        return <tr key={idx} onMouseOver={(e)=> onSubmitHandler(food)} onClick={onSubmit}>
                            <td>{food.name}</td>
                            <td>{food.price}</td>
                            <td>{food.description}</td>
                    </tr>
                    })}   

                    { loaded==='desayuno' && foodList.filter((food)=>{
                        return (food.type === 'desayuno')
                    }).map((food, idx)=>{
                        return <tr key={idx} onMouseOver={(e)=> onSubmitHandler(food)} onClick={onSubmit}>
                            <td>{food.name}</td>
                            <td>{food.price}</td>
                            <td>{food.description}</td>
                    </tr>
                    })}   

                </tbody>
            </table>
            <hr></hr>
            <h4 className="d-flex flex-row mx-4">Carrito</h4>
            
            <table className="table table-secondary table-sm w-50">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Type</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
            { cartList.map((order, idx)=>{

                        return <tr key={idx} >
                                    <td >{order.name}</td>
                                    <td >{order.price}</td>
                                    <td>{order.type}</td>
                                    <td>
                                        <button  onClick={(e)=>{deleteItem(order._id)}} className="btn btn-danger">
                                            Delete
                                        </button>
                                    </td>
                                </tr>

                    })}
                </tbody>
            </table>
            <Link to={'/purchase'}><button className="btn btn-primary d-flex flex-row mx-4">Select Items</button></Link>
        </div>
    )
}
export default Order;