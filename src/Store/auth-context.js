import React, { useState } from "react";
const AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{}
});

export const AuthContextProvider=(props)=>{
    const initial=localStorage.getItem('token')
    const initialEmail=localStorage.getItem('email')
    const [email,setEmail]=useState(initialEmail);
    const [token,setToken]=useState(initial);
    const userIsLoggedIn=!!token;
    const loginHandler=(token)=>{
        setToken(token);
        localStorage.setItem('token',token);
    }
    const emailHandler=(email)=>{
        setEmail(email);
        localStorage.setItem('email',email)
    }
    const logoutHandler=()=>{
        localStorage.removeItem('email');
        localStorage.removeItem('token')
    }
    const contextValue={
        token:token,
        email:email,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
        addEmail:emailHandler
    }
    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}
export default AuthContext;