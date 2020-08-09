import React,{useState,useEffect} from 'react';
import './Menuheader.css';
import { Link } from 'react-router-dom';
import Cusinehrecipecontent from '../Cusinerecipes/Cusinerecipecontent/Cusinerecipecontent';



const Menuheader = () => {
  const APP_ID ='0874564f';
  const APP_KEY = 'fb7486708c16e17946a533276242e282';

  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('chicken');

  const [open,setOpen] = useState(false);
  
  useEffect( () => {
    getRecipes();
  },[query]);

  const getRecipes = async() => {

    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data =  await response.json();
    setRecipes(data.hits);
    console.log(data.hits);

  }


  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');



  }

    const toglemenu = () => {
      setOpen(!open);
    }
    return(
        <div className="menuheaderBar"> 
        <div className="menubackground-image">
        <div className="firstBar">
            <p className="logoname"><Link to="/" className="logonamelink">Tastebuds</Link></p>
            <div className="navigationBar">
                <ul className="navigationlist">
                    <li><Link to="/" className="link">Home</Link></li>
                 
                  
                    <button className="recipedropdownbtn" onClick={toglemenu}>Recipe</button>
                    {open ?
                         <ul className="submenucontainer">
                         <div className="submenubtnset">
                         <li className="submenu"><button className="cuisinesubmenubtn"><Link className="linkmenu" to="/cusinerecipes">Cusine Recipes</Link></button></li>
                         <li className="submenu"><button className="mealsubmenubtn"><Link className="linkmenu" to="/mealrecipes">Meal Recipes</Link></button></li>                                   
                         <li className="submenu"><button className="dietsubmenubtn"><Link className="linkmenu" to="/dishrecipes">Dish Recipes</Link> </button></li>                        
                         </div>                        
                       </ul> :null}
                       <li><Link to="/about" className="link">About</Link></li>
    

                </ul>
               
            </div>
         </div>
         

        </div>
        <div>
        </div>
        
        </div>
    )

}
export default Menuheader;