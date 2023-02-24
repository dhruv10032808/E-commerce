import React,{useContext, useRef, useState} from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../Store/auth-context";
const Login=()=>{
    const [isLogin,setIsLogin]=useState(false);
    const history=useHistory();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmpasswordRef = useRef('');
    const authCtx=useContext(AuthContext);
    const clickHandler=(event)=>{
      event.preventDefault()
      setIsLogin((prev)=>!prev)
    }
    function submitHandler(event) {
      event.preventDefault();
      if(!isLogin){
        if(confirmpasswordRef.current.value!==passwordRef.current.value){
          alert('Passwords do not match');
          confirmpasswordRef.current.value=''
          passwordRef.current.value='';
          return;
        }
      }
      let url;
      if(isLogin){
        url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA7rO4EdjhHpAXsr7mgambxo-3AXaJ3zlY';
      }else{
        url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA7rO4EdjhHpAXsr7mgambxo-3AXaJ3zlY'
      }
      fetch(url,{
        method:'POST',
        body:JSON.stringify({
           email:emailRef.current.value,
           password:passwordRef.current.value,
           returnSecureToken:true
        }),
        headers:{
          'Content-Type':'application/json'
        }
      }).then((res)=>{
        if(res.ok){
          return res.json();
        }else{
          return res.json().then((data)=>{
            if(isLogin){
            let errorMessage='Authentication failed!'
            if(data && data.error && data.error.message){
              errorMessage=data.error.message
              throw new Error(errorMessage)
            }
          }
        })
    }
    }).then((data)=>{
      if(isLogin){
      authCtx.login(data.idToken)
      authCtx.addEmail(data.email)
      console.log(data.email)
      history.replace('/')
      }
      setIsLogin(true);
    })
    .catch((err)=>{
       alert(err);
    })
      
    }
  
    return (
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor='email-id'>email</label>
          <input type='email' id='email-id' ref={emailRef}></input>
        </div>
        <div>
          <label htmlFor='password'>password</label>
          <input type='text' id='password'  ref={passwordRef} />
        </div>
        {!isLogin && <div>
          <label htmlFor='confirmpassword'>Confirm password</label>
          <input type='text' id='confirmpassword'  ref={confirmpasswordRef} />
        </div>}
        <button type='submit'>{isLogin?'Login':'Sign Up'}</button><br></br>
        <button onClick={clickHandler}>{isLogin?'New user?Sign up':'Already a user?Login'}</button>
      </form>
    );
}
export default Login;