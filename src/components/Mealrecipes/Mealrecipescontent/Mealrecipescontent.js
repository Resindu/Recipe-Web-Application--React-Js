import React ,{useState,useEffect}from 'react';
import img1 from '../../../Icons/Asian-cuisine.jpg';
import '../Mealrecipescontent/Mealrecipescontent.css';
import Resultspage from '../../Resultpage/Resultspage';
import breakfast from '../../../Icons/breakfast.jpg';
import lunch from '../../../Icons/lunch9.jpg';
import dinner from '../../../Icons/dinner2.jpg';
import snack from '../../../Icons/Snack1.jpg';
import teatime from '../../../Icons/teatime.jpg';




const Mealrecipecontent = () => {

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
        <p className="menuboxtitle">Meal Recipe</p>
        </div>
  
        <div className="recipemenurow firstmenurow">
       
            <div className="menurecipebox">
                <img src={breakfast} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Breakfast' onClick={getHiddenMenu}>Breakfast </button>
            
            </div>
            <div className="menurecipebox">
                <img src={lunch} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Lunch' onClick={getHiddenMenu}>Lunch</button>
            
            </div>
            <div className="menurecipebox">
                <img src={dinner} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Dinner' onClick={getHiddenMenu}>Dinner</button>
            
            </div>
            <div className="menurecipebox">
                <img src={snack} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Snack' onClick={getHiddenMenu}>Snack</button>
            
            </div>
            <div className="menurecipebox">
                <img src={teatime} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Teatime' onClick={getHiddenMenu}> Teatime</button>
            
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

export default Mealrecipecontent;
