import React, { useContext} from 'react';
import { useForm } from "react-hook-form";
import { stateList } from "../util/constants"
import { useHistory } from "react-router-dom";
import { AppContext } from "../AppContext";



function UserInfoForm(props) {
    //configure form-hook
    const { register, handleSubmit, errors } = useForm({ mode: "onblur" });
    //access application context
    const { order, setOrder } = useContext(AppContext)
    const onSubmit = data => {
        console.log(data)
        setOrder(data)
        history.push('/confirm');
    }
    const history = useHistory();
    const productList = ["Product A", "Product B", "Product C", "Product D"]

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text"
                    style={{ borderColor: errors.name && "red" }}
                    placeholder="Customer Name" name="customerName" ref={register({ required: true, maxLength: 80 })} />
                <input type="text" placeholder="Email" name="email"
                    style={{ borderColor: errors.Email && "red" }}
                    ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                <input type="tel" placeholder="Mobile number" name="phoneNumber"
                    style={{ borderColor: errors.Email && "red" }}
                    ref={register({ required: true, maxLength: 12, pattern: /^[2-9]\d{2}-\d{3}-\d{4}$/i })} />
                <input type="text" placeholder="Street Address"
                    style={{ borderColor: errors.StreetAddress && "red" }}
                    name="streetAddress" ref={register({ required: true, min: 9, max: 40 })} />
                <input type="text" placeholder="Zip Code" name="zipCode"
                    style={{ borderColor: errors.ZipCode && "red" }}
                    ref={register({ required: true, min: 5, message: "Invalid zipcode", pattern: /^\d{5}$/i })} />
                        <fieldset style={{float: 'left'}}>
          <legend>Product List</legend>
          {
            productList.map(
              (c,i) => <label key={c}><input type="checkbox" value={c} name="productSelect" ref={register} />{c}</label>
            )
          }
        </fieldset>
                <select name="State" ref={register} >
                    {stateList.map(value => (
                        <option key={value} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
                <input type="submit" />
            </form>
        </div>
    );
}
export default UserInfoForm;