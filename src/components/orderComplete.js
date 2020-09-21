import React, { useContext } from 'react';
import { AppContext } from "../AppContext";
import ScrollAnimation from 'react-animate-on-scroll';
import "../styles/complete.css";
function OrderComplete() {
    const { order } = useContext(AppContext);
    return (
        <div >
            {order != null
                ? <div>
                    <ScrollAnimation animateIn="fadeInDown">
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
                    </ScrollAnimation>
                </div>
                :
                //display error message if page navigated to without object
                <p class="error"> You reached this page in error.</p>
            }
        </div>
    )
}
export default OrderComplete;