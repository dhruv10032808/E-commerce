import React,{useState,useContext} from 'react';
import CartContext from '../../Store/cart-context';
import CartShow from './CartShow';
const Cart=()=>{
   const cartCtx=useContext(CartContext)
   const [cartIsShown,setCartIsShown]=useState(false);
   const showCartHandler=()=>{
    setCartIsShown(true);
   }
   return(
    <div>
    <button onClick={showCartHandler}>Cart <p>{cartCtx.totalQuantity}</p></button>
    {cartIsShown && <CartShow/>}
    </div>
   )
}
export default Cart;