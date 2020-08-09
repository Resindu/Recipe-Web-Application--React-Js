import React ,{useState,useEffect}from 'react';
import img1 from '../../../Icons/Asian-cuisine.jpg';

import Resultspage from '../../Resultpage/Resultspage';
import Maincourse from '../../../Icons/maincourse.jpg';
import bread from '../../../Icons/Bread2.jpg';
import Cereals from '../../../Icons/Cereals.jpg';
import Biscuitsandcookies from '../../../Icons/Biscuits and cookies.jpg';
import Drinks from '../../../Icons/Drinks.jpg';
import Sandwiches from '../../../Icons/Sandwiches.jpg';
import Desserts from '../../../Icons/Desserts4.jpg';
import Soup from '../../../Icons/Soup1.jpg';
import Starter from '../../../Icons/Starter.jpg';
import Salad from '../../../Icons/Salad2.jpg';
import Alcoholcocktail from '../../../Icons/Alcohol-cocktail1.jpg';
import Egg from '../../../Icons/Egg.jpg';
import Pancake from '../../../Icons/Pancake1.jpg';
import Preps from '../../../Icons/Preps.jpg';
import sauces from '../../../Icons/sauces.jpg';




const Dishrecipecontent = () => {

const APP_ID ='0874564f';
const APP_KEY = 'fb7486708c16e17946a533276242e282';

const [recipes,setRecipes] = useState([]);
const [search,setSearch] = useState('');
const [query,setQuery] = useState('');

const [hiddenmenu,setHiddenmenu] = useState(false);




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

    const getHiddenMenu = e => {
        setHiddenmenu(!hiddenmenu);
        e.preventDefault();
        setQuery(e.target.value);  
  } 

    return(
        
        <div className="cusinerecipemenucontainer">
        <div className="menuboxtitlerow">
        <p className="menuboxtitle">Dish Recipe</p>
        </div>
  
        <div className="recipemenurow firstmenurow">
       
            <div className="menurecipebox">
                <img src={Maincourse} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Main course' onClick={getHiddenMenu}>Main course</button>
            
            </div>
            <div className="menurecipebox">
                <img src={bread} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Bread' onClick={getHiddenMenu}> Bread</button>
            
            </div>
            <div className="menurecipebox">
                <img src={Cereals} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Cereals ' onClick={getHiddenMenu}>Cereals </button>
            
            </div>
            <div className="menurecipebox">
                <img src={Biscuitsandcookies} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Biscuits and cookies ' onClick={getHiddenMenu}>Biscuits and cookies </button>
            
            </div>
            <div className="menurecipebox">
                <img src={Drinks} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Drinks' onClick={getHiddenMenu}>Drinks </button>
            
            </div>   
            
        </div>
        <div className="recipemenurow">
       
            <div className="menurecipebox">
                <img src={Desserts} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Desserts ' onClick={getHiddenMenu}>Desserts </button>
            
            </div>
            <div className="menurecipebox">
                <img src={Sandwiches} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Sandwiches' onClick={getHiddenMenu}>Sandwiches </button>
            
            </div>
            <div className="menurecipebox">
                <img src={Soup} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Soup ' onClick={getHiddenMenu}>Soup </button>
            
            </div>
            <div className="menurecipebox">
                <img src={Starter} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Starter  ' onClick={getHiddenMenu}>Starter  </button>
            
            </div>
            <div className="menurecipebox">
                <img src={Salad} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Salad ' onClick={getHiddenMenu}>Salad</button>
            
            </div>      
            
        </div>
        <div className="recipemenurow">
       
       <div className="menurecipebox">
           <img src={Alcoholcocktail} className="menurecipeimg"/>
           <button className="showrecipeboxtitlebtn" value='Alcohol-cocktail ' onClick={getHiddenMenu}>Alcohol-cocktail </button>
       
       </div>
       <div className="menurecipebox">
           <img src={Egg} className="menurecipeimg"/>
           <button className="showrecipeboxtitlebtn" value='Egg' onClick={getHiddenMenu}>Egg </button>
       
       </div>
       <div className="menurecipebox">
           <img src={Pancake} className="menurecipeimg"/>
           <button className="showrecipeboxtitlebtn" value='Pancake' onClick={getHiddenMenu}>Pancake </button>
       
       </div>
       <div className="menurecipebox">
           <img src={Preps} className="menurecipeimg"/>
           <button className="showrecipeboxtitlebtn" value='Preps' onClick={getHiddenMenu}>Preps</button>
       
       </div>
       <div className="menurecipebox">
           <img src={sauces} className="menurecipeimg"/>
           <button className="showrecipeboxtitlebtn" value='Condiments and sauces' onClick={getHiddenMenu}>Condiments and sauces
</button>
       
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
  
        
    )
}

export default Dishrecipecontent;
