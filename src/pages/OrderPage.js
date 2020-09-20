import React from 'react';
import OrderInfoForm from "../components/orderInfoForm"
import Intro from "../components/intro"

function OrderPage(){
    return(
        <div>
            <Intro />
           <OrderInfoForm />
        </div>
    )
}
export default OrderPage;