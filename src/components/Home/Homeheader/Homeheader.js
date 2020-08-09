import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Homeheader.css';

const Homeheader = () => {
  const [open,setOpen] = useState(false);

  const toglemenu = () => {
    setOpen(!open);
}

  
    return(
        <div className="headerBar"> 
        <div className="background-image">
        <div className="firstBar">
        <p className="logoname"><Link to="/" className="logonamelink">Tastebuds</Link></p>
            <div className="navigationBar">
                <ul className="navigationlist">
                    <li classname="navsublist"><Link to="/" className="link">Home</Link></li>
                    <li classname="navsublist"><Link to="/about" className="link">About</Link></li>
                  
                    <button className="recipedropdownbtn" onClick={toglemenu}>Recipe</button>
                    {open ?
                        <ul className="submenucontainer">
                          <div className="submenubtnset">
                          <li className="submenu"><button className="cuisinesubmenubtn"><Link className="linkmenu" to="/cusinerecipes">Cusine Recipes</Link></button></li>
                          <li className="submenu"><button className="mealsubmenubtn"><Link className="linkmenu" to="/mealrecipes">Meal Recipes</Link></button></li>                                   
                          <li className="submenu"><button className="dietsubmenubtn"><Link className="linkmenu" to="/dishrecipes">Diet Recipes</Link> </button></li>                        
                          </div>                        
                        </ul> :null}   

                </ul>
               
            </div>
         </div>
         <p className="recipefindtext">find your recipe</p>
         <div className="searchrow">
             <input type="text" className="searchbar"/>
             <button className="searchbutton"><i className="fa fa-search fa-2x"/></button>
         </div>

        </div>
        
        </div>
    ); 
      
}

export default Homeheader;
