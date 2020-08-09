import React,{useState} from 'react';
import Menuheader from '../Menuheader/Menuheader';
import Cusinerecipecontent from '../Cusinerecipes/Cusinerecipecontent/Cusinerecipecontent';
import Footer from '../Footer/Footer';

const Cusinerecipes = () => {
   

    return(
        <div className="outerContainer">
        <div className="container">
           <Menuheader/>
           <Cusinerecipecontent/>
           <Footer/>
        </div>
      </div>
    )
}
export default Cusinerecipes;
