import React from 'react';
import logo from './logo.svg'

import './style.css'
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";

function App() {
  return (
      <>
        <Header/>
        <Main/>
        <Features/>
        <Footer/>
      </>
  )
}

export default App;
