import React,{useState} from 'react';
import Menuheader from '../Menuheader/Menuheader';
import Mealrecipecontent from './Mealrecipescontent/Mealrecipescontent';
import Footer from '../Footer/Footer';

const Mealrecipes = () => {
   

    return(
        <div className="outerContainer">
        <div className="container">
           <Menuheader/>
           <Mealrecipecontent/>
           <Footer/>
        </div>
      </div>
    )
}
export default Mealrecipes;
