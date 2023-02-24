import React,{useCallback, useContext, useState,useEffect} from 'react'
import AuthContext from './auth-context';
import CartContext from './cart-context';

const ContextProvider=(props)=>{
    const authCtx=useContext(AuthContext)
    const[cartItems,setCartItems]=useState([]);
    const[totalAmount,setTotalAmount]=useState(0);
    const[totalQuantity,setTotalQuantity]=useState(0);
    let emailIdString,emailId;
  if(authCtx.isLoggedIn){
    emailIdString = authCtx.email.toString();
    emailId=emailIdString.replace(/[@.]/gi, '')
  }
  console.log(emailId);
  const getItemHandler=useCallback(async ()=>{
    const response=await fetch(`https://crudcrud.com/api/da823a8634bb4f9f85659fa5f3281623/cart${emailId}`)
    const data=await response.json();
    const cartItem = [];
    let amount = 0;
    for (const key in data) {
      amount += data[key].price;
      cartItem.push({
        id: data[key].id,
        title: data[key].title,
        price: data[key].price,
        imageUrl:data[key].imageUrl,
        quantity:data[key].quantity
      });
      }
      setTotalAmount(amount)
      setCartItems(cartItem);
    },[emailId])
    useEffect(() => {
        getItemHandler()
      }, [getItemHandler]);
    const addItemToCartHandler=(item)=>{
        fetch(`https://crudcrud.com/api/da823a8634bb4f9f85659fa5f3281623/cart${emailId}`,{
                method: "POST",
                body: JSON.stringify({
                  userid: emailId,
                  id: item.id,
                  price: item.price,
                  title: item.title,
                  imageUrl:item.imageUrl
                }),
                headers: {
                  "Content-Type": "application/json",
                }
        }).then((res)=>{
            if(res.ok){
                setTotalQuantity((prev)=>{
                    return prev+1;
                })
            }
        })
    }
    //     let updatedTotalAmount=cart_context.totalAmount+item.price;
    //     setTotalAmount(updatedTotalAmount);
    //     setTotalQuantity((prev)=>{
    //         return prev+1;
    //     })
    //     const findIndexOfItem=cartItems.findIndex((index)=>index.id===item.id);
    //     const existingItem=cartItems[findIndexOfItem];
    //     if(existingItem){
    //         let updatedItem={
    //             ...existingItem,
    //             quantity:existingItem.quantity+1
    //         };
    //     let updatedItems=[...cartItems];
    //     updatedItems[findIndexOfItem]=updatedItem;
    //     setCartItems(updatedItems);
    //     return;
    //     }
    //     let updatedItem={...item,quantity:1};
    //     setCartItems([...cartItems,updatedItem]);
    const removeItemFromCartHandler=()=>{
      
    };

    let cart_context={
    listOfItems:cartItems,
    totalAmount:totalAmount,
    totalQuantity:totalQuantity,
    addItem:addItemToCartHandler,
    removeItem:removeItemFromCartHandler,
    getItem:getItemHandler
    }
  return <CartContext.Provider value={cart_context}>
    {props.children}
  </CartContext.Provider>
}
export default ContextProvider;
