import React, { useContext } from 'react';
import { AppContext } from "../AppContext";
import ScrollAnimation from 'react-animate-on-scroll';
import "../styles/complete.css";
function OrderComplete() {
    const { order } = useContext(AppContext);
    // const order = {
    //     customerName: 'b',
    //     email: 'sdfsd',
    //     streetAddress: 'sdfds',
    //     city: 'Cor',
    //     zipCode: 'asdfsda',
    //     stateAddress: 'asdfds',
    //     productSelect: [
    //         'this',
    //         'that'
    //     ]
    // }
    return (
        <div >
            <ScrollAnimation animateIn="fadeInDown">
            {order !== null
                ? <div>
                    <h1 class="completeBanner">Your Order is Confirmed!</h1>
                    <div class="complete">
                        <div class="completeIntro">
                            <p>Your Order: </p>
                        </div>
                        <div class="completeDetails">
                            <p class="completeHeadline">Shipping Address : </p>
                            <p> {order.customerName} </p>
                            <p> {order.streetAddress} </p>
                            <p> {order.city} , {order.stateAddress}  {order.zipCode}</p>
                            <p class="completeHeadline">Contact Info : </p>
                            <p> {order.email} </p>
                            <p> {order.phoneNumber} </p>
                            <p class="completeHeadline">Your Order: </p>
                            <div class="productOrder" >
                                {
                                    order.productSelect.map((product, i) =>
                                        <p>{product} </p>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
                :
                <p class="error"> You reached this page in error.</p>
            }
            </ScrollAnimation>
        </div>
    )
}

export default OrderComplete;