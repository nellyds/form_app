import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { stateList } from "../util/constants"
import { AppContext } from "../AppContext";
import OrderConfirmation from "./orderConfirmation"
import ScrollAnimation from 'react-animate-on-scroll';
import "../styles/orderForm.css"


function UserInfoForm(props) {
    //configure form-hook
    const { register, handleSubmit, errors } = useForm({ mode: "onblur" });
    //create state data
    const productList = ["Product A", "Product B", "Product C", "Product D"]
    const [showConfirmation, toggleConfirm] = useState(false)
    //retrieves application context
    const { setOrder } = useContext(AppContext)

    //submit data from user and validate
    const onSubmit = data => {
        setOrder(data);
        console.log(data)
        toggleConfirm(true)
    }
    return (
        <ScrollAnimation animateIn="fadeInRight">
            <div class="orderContainer">
                <div class="orderForm">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <p class="inputLabel"> Customer Name :</p>
                            <input
                                class="inputField"
                                aria-label="Name Input Field"
                                type="text"
                                style={{ border: errors.customerName && "solid 3px rgb(180,26,26)" }}
                                aria-invalid={errors.name ? "true" : "false"}
                                placeholder="Customer Name" name="customerName" ref={register({ required: true, maxLength: 80,
                                    pattern: /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/
                                })} />
                            {errors.customerName && <p class="error">Invalid name.  Please re-enter this field.</p>}
                        </div>
                        <div>
                            <p class="inputLabel">Email :</p>
                            <input
                                class="inputField" type="text" placeholder="Email" name="email"
                                aria-label="Email Input Field"
                                aria-invalid={errors.name ? "true" : "false"}
                                style={{ border: errors.email && "solid 3px rgb(180,26,26)" }}
                                ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                            {errors.email && <p class="error">Invalid email address.  Please re-enter this field.</p>}
                        </div>
                        <div>
                            <p class="inputLabel">Phone No. :</p>
                            <input class="inputField" type="tel" placeholder="Format xxx-xxx-xxxx" name="phoneNumber"
                                aria-label="Phone Number Input Field"
                                aria-invalid={errors.name ? "true" : "false"}
                                style={{ border: errors.phoneNumber && "solid 3px rgb(180,26,26)" }}
                                ref={register({ required: true, maxLength: 12, pattern: /^[2-9]\d{2}-\d{3}-\d{4}$/i })}
                            />
                            {errors.phoneNumber && <p class="error">Invalid phone number.  Format xxx-xxx-xxxx </p>}
                        </div>
                        <div>
                            <p class="inputLabel">Street Address :</p>
                            <input type="text" placeholder="Street Address"
                                aria-label="Street address input field"
                                class="inputField"
                                aria-required="true"
                                aria-invalid={errors.name ? "true" : "false"}
                                style={{ border: errors.streetAddress && "solid 3px rgb(180,26,26)" }}
                                name="streetAddress" ref={register({ required: true, min: 9, max: 40, pattern:  /^[#.0-9a-zA-Z\s,-]+$/ })} />
                            {errors.streetAddress && <p class="error">Invalid street address.  Please re-enter this field.</p>}
                        </div>
                        <div>
                            <p class="inputLabel">City :</p>
                            <input type="text" placeholder="City"

                                class="inputField"
                                aria-label="City input field"
                                aria-required="true"
                                aria-invalid={errors.name ? "true" : "false"}
                                style={{ border: errors.streetAddress && "solid 3px rgb(180,26,26)" }}
                                name="city" ref={register({ required: true, min: 9, max: 40 })} />
                            {errors.streetAddress && <p class="error">Invalid city name.  Please re-enter this field.</p>}
                        </div>
                        <div>
                            <p class="inputLabel">Zip code :</p>
                            <input type="text" placeholder="Zip Code" name="zipCode"
                                class="inputField"
                                aria-label="Zip code input field"
                                aria-invalid={errors.name ? "true" : "false"}
                                style={{ border: errors.zipCode && "solid 3px rgb(180,26,26)" }}
                                ref={register({ required: true, min: 5, message: "Invalid zipcode", pattern: /^\d{5}$/i })} />
                            {errors.zipCode && <p class="error">Invalid zip code.  Please re-enter this field.</p>}
                        </div>
                        <div>
                            <p class="inputLabel">State</p>
                            <select
                                class="selectField"
                                name="stateAddress"
                                aria-label="State input field"
                                ref={register} >
                                {stateList.map(value => (
                                    <option key={value} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                            <p class="inputLabel">
                                <legend>Product List</legend>
                                {
                                    productList.map(
                                        (product, i) => <label key={product}><input class="checkInput" type="checkbox" value={product} aria-label={product} name="productSelect" ref={register} />{product}</label>
                                    )
                                }
                            </p>
                        </div>
                        <input aria-label="Form submit button" class="submitButton" type="submit" label="submit" />
                        <div>
                            {showConfirmation ? <OrderConfirmation /> : null}
                        </div>
                    </form>

                </div>
            </div>
        </ScrollAnimation>
    );
}
export default UserInfoForm;