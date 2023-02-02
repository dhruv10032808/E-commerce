import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Data from './components/Body/Data';
import CartButton from './components/Cart/CartButton';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import ContextProvider from './Store/ContextProvider';

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
      <Footer/>
      </ContextProvider>)

};

export default App;
