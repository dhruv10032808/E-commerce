import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Data from './components/Body/Data';
import CartButton from './components/Cart/CartButton';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AboutUs from './pages/AboutUs';
import ContextProvider from './Store/ContextProvider';

const App = () => {
  return (<ContextProvider>
      <main>
      <Route exact path='/about'>
        <Header/> 
       <AboutUs/>
        <Footer/>
      </Route>
      </main>
      <Route path='/' exact>
  <Header/>
  <Data/>
  <CartButton/>
  <Footer/>
  </Route>
  </ContextProvider>)

};

export default App;
