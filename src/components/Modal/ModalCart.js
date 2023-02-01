import React from 'react';
import ReactDOM from 'react-dom';
import classes from './ModalCart.module.css'
const Modal=(props)=>{
   return <div className={classes.modal}>
    {props.children}
   </div>
};
const ModalCart=(props)=>{
   return <>
   {ReactDOM.createPortal(<Modal>{props.children}</Modal>,document.getElementById('modal'))};
   </>
}
export default ModalCart;
