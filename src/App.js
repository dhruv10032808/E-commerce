import React from 'react';
import './App.css';
import Data from './components/Body/Data';
import CartButton from './components/Cart/CartButton';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {
  return (<div><Header/>
  <Data/>
  <CartButton/>
  <Footer/></div>)

};

export default App;
