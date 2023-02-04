import React,{useContext} from 'react';
import ModalCart from '../Modal/ModalCart';
import classes from './CartShow.module.css'
import CartItem from './CartItem';
import CartContext from '../../Store/cart-context';
const CartShow=(props)=>{
       const cartCtx = useContext(CartContext);

        const items=cartCtx.listOfItems.map((item)=>{
          return <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          imageUrl={item.imageUrl}
          quantity={item.quantity}
          />
        })
        return (
        <ModalCart>    
                <div className={classes.cart_show}>
        <button className={classes.cart_cancel_btn} onClick={props.removeCartHandler}>X</button>
        <h1 className={classes.title}>CART</h1>
        <div className={classes.subtitle}>
          <span className={classes.subtitle_name}>ITEM</span>
          <span className={classes.subtitle_name}>PRICE</span>
          <span className={classes.subtitle_name}>QUANTITY</span>
        </div>
        <ul>{items}</ul>
        <div className={classes.total}>
          <span>Total</span>
          <span className={classes.total_amount}>{cartCtx.totalAmount}</span>
        </div>
        </div>
    </ModalCart>
        )
}
export default CartShow;
