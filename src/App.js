import React, { Suspense, useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import './App.css';
import Data from './components/Body/Data';
import ProductDetail from './components/Body/ProductDetail';

import CartButton from './components/Cart/CartButton';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AuthContext from './Store/auth-context';
import ContextProvider from './Store/ContextProvider';

const AboutUs=React.lazy(()=>import('./pages/AboutUs'))
const ContactUs=React.lazy(()=>import('./pages/ContactUs'))
const Home=React.lazy(()=>import('./pages/Home'))
const Login=React.lazy(()=>import('./pages/Login'))

async function postRequestHandler(data){
  const response=await fetch('https://react-http-1ccd0-default-rtdb.firebaseio.com/data.json',{
    method:'POST',
    body:JSON.stringify(data),
    headers:{
      'Content-Type':'application/json'
    }
  })
  const values=await response.json();
  console.log(values);
}

const App = () => {
  const authCtx=useContext(AuthContext)
  return (<ContextProvider>
    <Suspense fallback={<p>Loading...</p>}>
      <main>
      <Header/> 
      <Route exact path='/about'>
       <AboutUs/>
      </Route>
      </main>
      <Route path='/' exact>
      {authCtx.isLoggedIn && <main><Data/>
      <CartButton/></main>}
      {!authCtx.isLoggedIn && <Redirect to='/login'/>}
      </Route>
      <Route path='/home' exact>
      <Home/>
      </Route>
      <Route path='/contactus' exact>
      <ContactUs onSubmit={postRequestHandler}/>
      </Route>
      <Route path='/home/:productId' exact>
      <ProductDetail/>
      </Route>
      {<Route path='/login' exact>
        <Login/>
      </Route>}
      <Footer/>
      </Suspense>
      </ContextProvider>)

};

export default App;
