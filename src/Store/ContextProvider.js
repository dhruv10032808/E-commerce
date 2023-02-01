import React,{useState} from 'react'
import CartContext from './cart-context';

const ContextProvider=(props)=>{
    const[cartItems,setCartItems]=useState([]);
    const[totalAmount,setTotalAmount]=useState(0);
    const[totalQuantity,setTotalQuantity]=useState(0);
    const addItemToCartHandler=(item)=>{
        let updatedTotalAmount=cart_context.totalAmount+item.price;
        setTotalAmount(updatedTotalAmount);
        setTotalQuantity((prev)=>{
            return prev+1;
        })
        const findIndexOfItem=cartItems.findIndex((index)=>index.id===item.id);
        const existingItem=cartItems[findIndexOfItem];
        if(existingItem){
            let updatedItem={
                ...existingItem,
                quantity:existingItem.quantity+1
            };
        let updatedItems=[...cartItems];
        updatedItems[findIndexOfItem]=updatedItem;
        setCartItems(updatedItems);
        return;
        }
        let updatedItem={...item,quantity:1};
        setCartItems([...cartItems,updatedItem]);
    }
    const removeItemFromCartHandler=()=>{};

    let cart_context={
    listOfItems:cartItems,
    totalAmount:totalAmount,
    totalQuantity:totalQuantity,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler
    }
  return <CartContext.Provider value={cart_context}>
    {props.children}
  </CartContext.Provider>
}
export default ContextProvider;
