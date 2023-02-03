import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Data from './components/Body/Data';
import ProductDetail from './components/Body/ProductDetail';
import ProductsPage from './components/Body/ProductsPage';
import CartButton from './components/Cart/CartButton';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import ContextProvider from './Store/ContextProvider';

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
  return (<ContextProvider>
      <main>
      <Header/> 
      <Route exact path='/about'>
       <AboutUs/>
      </Route>
      </main>
      <Route path='/' exact>
      <Data/>
      <CartButton/>
      </Route>
      <Route path='/home' exact>
      <Home/>
      </Route>
      <Route path='/contactus' exact>
      <ContactUs onSubmit={postRequestHandler}/>
      </Route>
      <Route path='/products' exact>
        <ProductsPage/>
      </Route>
      <Route path='/products/:productId' exact>
        <ProductDetail/>
      </Route>
      <Footer/>
      </ContextProvider>)

};

export default App;
