import React, {useContext} from 'react';
import { AppContext } from "../AppContext";
function OrderConfirmation() {
    const { order } = useContext(AppContext)

    return(
        <div>
            <p>confirmation</p>
            <p> {order.customerName} </p>
            <p> {order.email} </p>
            <p> {order.phoneNumber} </p>
            <p> {order.streetAddress} </p>
    <p> { order.zipCode}</p>
    <p> { order.state}</p>

        </div>
    )
}
export default OrderConfirmation;