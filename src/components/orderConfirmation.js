import React, { useContext, useState } from 'react';
import { AppContext } from "../AppContext";
import { useHistory } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import "../styles/confirmation.css";
import axios from 'axios';
function OrderConfirmation() {
    //retrieve order from application context
    const { order } = useContext(AppContext)
    //retrieves history object from router for navigation
    const history = useHistory();
    //set state for error messages and a loading boolean
    const [processing, setProcessing] = useState(false)
    const [message, setMessage] = useState(false)
    //validate address against smartstreets API
    const validateAddress = async () => {

        setMessage(true)
        history.push('/confirm')
        // console.log('reached')
        // setProcessing(true)
        // let streetQuery = order.streetAddress + " " + order.city + " " + order.stateAddress + " " + order.zipCode
        // console.log(streetQuery)
        // let response = await axios.get('https://us-street.api.smartystreets.com/street-address', {
        //     params: {
        //         street: streetQuery,
        //         key: "17303761601010098"
        //     }
        // }).catch(error => {
        //     console.log(error.message)
        // })
        // //if the address string produces any matching results, the address is valid and the order is stored in the 
        // //appContext and the app navigates to the confirmation page
        // console.log(response.data)
        // if (response.data.length > 0) {
        //     setProcessing(false)
        //     history.push('/confirm');
        // } else {
        //     setProcessing(false)
        //     setMessage('Invalid Address, please check all fields!')
        // }

    }
    return (
        <div>
            <ScrollAnimation animateIn="fadeInRight">
                <p class="confirmHeader">Just a second...</p>
                <div class="confirmationForm">
                    <div class="confirmationQuestion">
                        <p class="confirmQuestion">Is all this correct?  </p>
                    </div>
                    <div class="details">
                        <p class="orderConfirm"> Name :
                        <span class="orderDetail"> {order.customerName} </span></p>
                        <p class="orderConfirm" > Email:  <span class="orderDetail"> {order.email} </span> </p>
                        <p class="orderConfirm"> Phone No.: 
                        <span class="orderDetail"> {order.phoneNumber} </span>
                        </p>
                        <p class="orderConfirm"> Address : </p>
                        <p class="orderDetail"> {order.streetAddress} </p>
                        <p class="orderDetail"> {order.city} , {order.stateAddress} {order.zipCode} </p>
                        <p class="orderConfirm"> Your Order :</p>
                        <div class="productOrder" >
                            {
                                order.productSelect.map((product, i) =>
                                    <p>{product} </p>
                                )}
                        </div>
                    </div>
                </div>
                <button class="submitButton" onClick={validateAddress} type="submit" label="submit" > Confirm your order </button>
            </ScrollAnimation>
            {processing ?
                <p style="font-style=italic" > Processing... </p>
                : null
            }
            {message
                ?
                <p class="message"> That address could not be verified.  Please check all fields!</p>
                : null
            }
        </div>
    )
}
export default OrderConfirmation;