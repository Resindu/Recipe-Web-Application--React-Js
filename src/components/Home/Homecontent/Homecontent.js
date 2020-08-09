import React,{useState,useEffect} from 'react';
import './Homecontent.css';
import Resultspage from '../../Resultpage/Resultspage';
import { Link } from 'react-router-dom';


import img1 from '../../../Icons/frenchtoast1.jpg';
import img2 from '../../../Icons/Chocolate chip cookie1.jpg';
import img3 from '../../../Icons/Banana bread.jpg';
import healthypancakes from '../../../Icons/healthypancakes.jpg';
import brownbread from '../../../Icons/BROWNBREAD.jpg';
import vegsalard from '../../../Icons/vegsalard.jpg';
import healthybrownies from '../../../Icons/healthybrownies.jpg';
import blueberrymuffins from '../../../Icons/blueberrymuffins2.jpg';
import oatmeal from '../../../Icons/oatmeal.jpg';
import bropicyTomatoArugulaPastawnbread from '../../../Icons/picy Tomato & Arugula Pasta.jpg';
import cherrysmoothie from '../../../Icons/cherry smoothie.jpg';
import VegetableRice from '../../../Icons/Vegetable Rice.jpg';
import EggSaladSandwich from '../../../Icons/Egg Salad Sandwich2.jpg';




const Homecontent = () => {
    const APP_ID ='0874564f';
const APP_KEY = 'fb7486708c16e17946a533276242e282';

const [recipes,setRecipes] = useState([]);
const [search,setSearch] = useState('');
const [query,setQuery] = useState('');

const [hiddenmenu,setHiddenmenu] = useState(false);
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
const getnewSearch = e => {
  e.preventDefault();
  setQuery(e.target.value);   

}

const toglemenu = () => {
  setOpen(!open);
}


  
    console.log('hello from content');
    return(
        <div>
        <div className="headerBar"> 
        <div className="background-image">
        <div className="firstBar">
        <p className="logoname"><Link to="/" className="logonamelink">Tastebuds</Link></p>
            <div className="navigationBar">
                <ul className="navigationlist">
                    <li classname="navsublist"><Link to="/" className="link">Home</Link></li>
                  
                    <button className="recipedropdownbtn" onClick={toglemenu}>Recipe</button>
                    {open ?
                        <ul className="submenucontainer">
                          <div className="submenubtnset">
                          <li className="submenu"><button className="cuisinesubmenubtn"><Link className="linkmenu" to="/cusinerecipes">Cusine Recipes</Link></button></li>
                          <li className="submenu"><button className="mealsubmenubtn"><Link className="linkmenu" to="/mealrecipes">Meal Recipes</Link></button></li>                                   
                          <li className="submenu"><button className="dietsubmenubtn"><Link className="linkmenu" to="/dishrecipes">Dish Recipes</Link> </button></li>                        
                          </div>                        
                        </ul> :null}   
                        <li classname="navsublist"><Link to="/about" className="link">About</Link></li>


                </ul>
               
            </div>
         </div>
         <p className="recipefindtext">find your recipe</p>
         <div className="searchrow">
             <input type="text" className="searchbar" value={search} onChange={e => setSearch(e.target.value)} 
             onKeyPress={e => e.key === 'Enter' ?  e.preventDefault() & setQuery(search) & setSearch(''): null}/>
             <button className="searchbutton"><i className="fa fa-search fa-2x" onClick={getSearch}/></button>
         </div>

        </div>
        
        </div>
        <div className ="homecontent">
         <div className = "samplerecipecontainer">
           <div className="showrecipebox">
               <img src={img1} className="showrecipeboximage"/>
               <p className="showrecipeboxtitle">French Toast</p>
               <button className="viewrecipebtn" value="French Toast" onClick={getnewSearch}>View Recipe</button>
               
           </div>
           <div className="showrecipebox">
               <img src={img2} className="showrecipeboximage"/>
               <p className="showrecipeboxtitle">Chocolate chip cookies</p>
               <button className="viewrecipebtn" value="Chocolate chip cookies" onClick={getnewSearch}>View Recipe</button>
               
           </div>
           <div className="showrecipebox">
               <img src={img3} className="showrecipeboximage"/>
               <p className="showrecipeboxtitle">Banana bread</p>
               <button className="viewrecipebtn" value="Banana bread" onClick={getnewSearch}>View Recipe</button>
               
           </div>
      </div>
      <div className="boxtitlerow">
      <p className="boxtitle">Healthy Recipe</p>
      <button className="viewallbtn" value="Healthy Recipe" onClick={getnewSearch}>View All</button>
      </div>

      <div className="healthyrecipe">
          <div className="healthyrecipebox">
              <img src={healthypancakes} className="healthyrecipeimg"/>
              <p className="showrecipeboxtitle">Healthy Pancakes</p>
          </div>
          <div className="healthyrecipebox">
              <img src={brownbread} className="healthyrecipeimg"/>
              <p className="showrecipeboxtitle">Brown Bread</p>
          </div>
          <div className="healthyrecipebox">
              <img src={vegsalard} className="healthyrecipeimg"/>
              <p className="showrecipeboxtitle">Vegetable Salard</p>
          </div>
          <div className="healthyrecipebox">
              <img src={healthybrownies} className="healthyrecipeimg"/>
              <p className="showrecipeboxtitle">Healthy Brownies</p>
          </div>
          <div className="healthyrecipebox">
              <img src={blueberrymuffins} className="healthyrecipeimg"/>
              <p className="showrecipeboxtitle">Healthy Blueberry Muffins</p>
          </div>

      </div>
      <div className="boxtitlerow">
      <p className="boxtitle">Diet Recipe</p>
      <button className="viewallbtn dietrecipebtn" value="Diet Recipe" onClick={getnewSearch}>View All</button>
      </div>

      <div className="healthyrecipe">
          <div className="healthyrecipebox">
              <img src={oatmeal} className="healthyrecipeimg"/>
              <p className="showrecipeboxtitle">Oat Meal</p>
          </div>
          <div className="healthyrecipebox">
              <img src={bropicyTomatoArugulaPastawnbread} className="healthyrecipeimg"/>
              <p className="showrecipeboxtitle">Spicy tomato & arugula pasta</p>
          </div>
          <div className="healthyrecipebox">
              <img src={cherrysmoothie} className="healthyrecipeimg"/>
              <p className="showrecipeboxtitle">Cherry smoothie</p>
          </div>
          <div className="healthyrecipebox">
              <img src={VegetableRice} className="healthyrecipeimg"/>
              <p className="showrecipeboxtitle">Vegetable Rice</p>
          </div>
          <div className="healthyrecipebox">
              <img src={EggSaladSandwich} className="healthyrecipeimg"/>
              <p className="showrecipeboxtitle">Egg Salad Sandwich</p>
          </div>

      </div>
      <p className="selectedmenuheading">{query}</p>

        
<div className="recipes">
           
           {recipes.map( recipe => (
            <Resultspage 
            key = {recipe.recipe.label}
            title={recipe.recipe.label} 
            calories ={recipe.recipe.calories}
            ingredients ={recipe.recipe.ingredients}
            image ={recipe.recipe.image}
            />
        ))} 
       
</div>
      

     </div>
     </div>

    );
}
   
export default Homecontent;
