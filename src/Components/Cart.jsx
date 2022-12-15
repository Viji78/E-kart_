
import React from 'react';
import { useDispatch } from 'react-redux';

import { delCart } from '../redux/action';
import { addCart } from '../redux/action';
import { useSelector } from "react-redux";



const Cart = () => {


    const dispatch = useDispatch();

    const handleButtonDel=(product)=>{
        dispatch(delCart(product));
    } 

    const handleButtonAdd=(product)=>{
        dispatch(addCart(product));
    }


    const NoData=() =>{
        return (
            <h1>No item.......</h1>
        )
    }

    const Cart_Product = useSelector((state) => state.handleCart)

    console.log(Cart_Product)


    const ShowCart = () => {
        return (
            <>
                {Cart_Product.map((product) => {
                    return (
                        <>
                                <div className="row" >
                                    <div className="col-md-4">
                                    <img src={product.image} alt={product.title} height="200px" width="180px"/>
                                    </div>
                                    <div className="col-md-4">
                                        <h3>{product.title}</h3>
                                        <p className="lead fw-bold">
                                            {product.qty} X ${product.price} = ${product.qty * product.price}
                                        </p>
                                        {/* <button className="btn btn-outline-dark me-4"> */}
                                         <button className="btn btn-outline-dark me-4" onClick={()=> handleButtonDel(product)}>

                                            <i className='fa fa-minus'></i>
                                        </button>
                                        {/* <button className="btn btn-outline-dark"> */}
                                         <button className="btn btn-outline-dark me-4" onClick={()=> handleButtonAdd(product)}>
                                            <i className='fa fa-plus'></i>
                                        </button>
                                    </div>
                                </div>

                        </>
                    )
                })}

            </>
        );
    }



    return (

        <div>
            <div className="container py-5">
                <div className="row py-5">
                     
        {Cart_Product.length===0 ? <NoData/> : <ShowCart/>}
                </div>
            </div>

        </div>

    );
}
export default Cart;