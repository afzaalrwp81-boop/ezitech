import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from './components/NavBar';
import Centre from './components/Centre';
import Footer from './components/Footer';
import Sliderpic from './components/Sliderpic';


const App = () => {
  return (
    <div>
  
    <NavBar/>
    <Sliderpic/>
    <Centre/>
     <Footer/>
    </div>
  )
}

export default App;
