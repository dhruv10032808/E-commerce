import React,{useContext, useRef} from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../Store/auth-context";
const Login=()=>{
    const history=useHistory();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const authCtx=useContext(AuthContext);
    function submitHandler(event) {
      event.preventDefault();
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA7rO4EdjhHpAXsr7mgambxo-3AXaJ3zlY',{
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
            let errorMessage='Authentication failed!'
            if(data && data.error && data.error.message){
              errorMessage=data.error.message
              throw new Error(errorMessage)
            }
        })
    }
    }).then((data)=>{
      authCtx.login(data.idToken)
      authCtx.addEmail(data.email)
      console.log(data.email)
      history.replace('/')
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
        <button type='submit'>Login</button>
      </form>
    );
}
export default Login;