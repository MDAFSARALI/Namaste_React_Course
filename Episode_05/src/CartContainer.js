import DataObj from "../utils/Data";
import CartItem from "./CartItem";
import {DataObj} from '../utils/Data'
const CartContainer = () => (
  <div className="cart-container">
    {
        DataObj.map((restaurant) =>(
            <CartItem key={restaurant.info.resId} DataObj={restaurant} />
        ))
    }
  </div>
);


export default CartContainer;