import React from 'react'
import { useSelector } from 'react-redux';
import FoodItems from './FoodItems';
import { clearItems } from "../utils/cartSlice";
 import {useDispatch} from "react-redux";
 import {useSelector} from "react-redux";

const Cart = () => {
  const cartItems = useSelector(store => store.cart.items)

  const dispatch = useDispatch();
  const foodItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearItems());
  };
  
  return (
    <div>
      <h1>Cart Items {cartItems.length}</h1>
      <div className="w-6/12 m-auto">
        <button
          className=" p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems?.length === 0 && (
          <h1> Cart is empty. Add Items to the cart!</h1>
        )}
{ foodItems.map(item => <FoodItems {...cartItems} />)
}      </div>
      </div>
  )
}

export default Cart;
