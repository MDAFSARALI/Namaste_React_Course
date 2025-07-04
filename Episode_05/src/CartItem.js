import {DataObj} from "../utils/Data";
import { useState } from "react";
const CartItem = ({ DataObj  }) => {
     const [data, setData] = useState({DataObj});
    return (
        <>
        <div className="cart-item" style={{ maxWidth:"200px",justifyContent:"space-between" , margin:"auto" }}>
            <div className="cart-item-image">
                <img src={DataObj.info.image.url} alt={name} style={{ width: '200px', height: '200px' }} />
            </div>
        <div className="cart-item-details">
            <h3>{DataObj.info.name}</h3>
            <p>{DataObj.info.cft.text}</p>
            <p>{DataObj.info.locality.name}</p>
            <p>{DataObj.info.rating.aggregate_rating} ({DataObj.info.rating.votes})</p>
        </div>
        <div className="cart-item-action">
            <button className="order-btn">Order Now</button>
        </div>
    </div>
    </>
 )};

 export default CartItem;