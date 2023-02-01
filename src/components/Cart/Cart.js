import React,{useState} from 'react';
import CartShow from './CartShow';
const Cart=()=>{
   const [cartIsShown,setCartIsShown]=useState(false);
   const showCartHandler=()=>{
    setCartIsShown(true);
   }
   return(
    <>
    <button onClick={showCartHandler}>Cart</button>
    {cartIsShown && <CartShow/>}
    </>
   )
}
export default Cart;