import React,{useState} from "react";

function MyComponent(){
    const[name,setName] = useState("Guest");
    const[quantity,setQuantity]=useState(1);
    const[comment,setComment]=useState("");
    const[payment,setPayment]=useState("");
    const[shipping,setShipping]=useState("");
    
    function handleChangeName(event){
        setName(event.target.value);
    }

    function handleChangeQuantity(event){
        setQuantity(event.target.value);
    }

    function handleChangeComment(event){
        setComment(event.target.value);
    }
    function handleChangePayment(event){
        setPayment(event.target.value);
    }
    function handleChangeShipping(event){
        setShipping(event.target.value);
    }
    return(
        <div>
            <input value={name} onChange={handleChangeName} />
            <p>Name:{name}</p>

            <input value={quantity} onChange={handleChangeQuantity}  type="number"/>
            <p>Quantity:{quantity}</p>

            <textarea value={comment} onChange={handleChangeComment} placeholder="Enter Delivery insturictions" />
            <p>Comment:{comment}</p>

            

            <select value={payment} onChange={handleChangePayment}>
                <option value="">Select a option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">GiftCard</option>
            </select>
            <p>Payment:{payment}</p>

            <label>
                <input type="radio" value="Pick Up"
                checked={shipping==="Pick Up"}
                onChange={handleChangeShipping}
                />
                Pick Up

            </label><br />
            <label>
                <input type="radio" value="Delivery"
                checked={shipping==="Delivery"}
                onChange={handleChangeShipping}
                />
                Delivery

            </label>
            <p>Shipping:{shipping}</p>
            
            
        </div>
    );
}
export default MyComponent