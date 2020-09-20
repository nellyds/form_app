import React, {useContext } from 'react';
import {AppContext } from "../AppContext";

function OrderComplete() {
    const {order} = useContext(AppContext)
    return(
        <div>

            <h1>Your Order is Confirmed!</h1>
            <p> {order.customerName} </p>
            <p> {order.email} </p>
            <p> {order.phoneNumber} </p>
            <p> {order.streetAddress} </p>
    <p> {order.city}</p>
    <p> { order.zipCode}</p>
    <p> { order.stateAddress}</p>

        </div>
    )
}