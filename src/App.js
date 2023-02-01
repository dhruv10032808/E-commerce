import React from 'react';
import './App.css';
import Data from './components/Body/Data';
import CartButton from './components/Cart/CartButton';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ContextProvider from './Store/ContextProvider';

const App = () => {
  return (<ContextProvider><Header/>
  <Data/>
  <CartButton/>
  <Footer/></ContextProvider>)

};

export default App;
