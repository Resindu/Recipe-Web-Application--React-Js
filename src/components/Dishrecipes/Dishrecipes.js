import React,{useState} from 'react';
import Menuheader from '../Menuheader/Menuheader';
import Dishrecipecontent from './Dishrecipecontent/Dishrecipecontent';
import Footer from '../Footer/Footer';

const Dishrecipes = () => {
   

    return(
        <div className="outerContainer">
        <div className="container">
           <Menuheader/>
           <Dishrecipecontent/>
           <Footer/>
        </div>
      </div>
    )
}
export default Dishrecipes;
