import React ,{useState,useEffect}from 'react';
import img1 from '../../../Icons/Asian-cuisine.jpg';
import '../Cusinerecipecontent/Cusinerecipecontent.css';
import Resultspage from '../../Resultpage/Resultspage';
import american from '../../../Icons/american3.jpg';
import asian from '../../../Icons/asian3.jpg';
import english from '../../../Icons/british3.jpg';
import chinese from '../../../Icons/chinese1.jpg';
import french from '../../../Icons/french1.jpg';
import italian from '../../../Icons/italian3.jpg';
import mexican from '../../../Icons/mexican1.jpg';
import japanese from '../../../Icons/japanese3.jpg';
import middleeast from '../../../Icons/midleeast1.jpg';
import nordic from '../../../Icons/nordicV.jpg';



const Cusinehrecipecontent = () => {

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
        <p className="menuboxtitle">Cusine Recipe</p>
        </div>
  
        <div className="recipemenurow firstmenurow">
       
            <div className="menurecipebox">
                <img src={american} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='American Cuisine' onClick={getHiddenMenu}>American Cuisine</button>
            
            </div>
            <div className="menurecipebox">
                <img src={asian} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Asian Cuisine' onClick={getHiddenMenu}>Asian Cuisin</button>
            
            </div>
            <div className="menurecipebox">
                <img src={english} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='British Cuisine' onClick={getHiddenMenu}>British Cuisine</button>
            
            </div>
            <div className="menurecipebox">
                <img src={chinese} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Chinese Cuisine' onClick={getHiddenMenu}>Chinese Cuisin</button>
            
            </div>
            <div className="menurecipebox">
                <img src={french} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='French Cuisine' onClick={getHiddenMenu}>French Cuisin</button>
            
            </div>   
            
        </div>
        <div className="recipemenurow">
       
            <div className="menurecipebox">
                <img src={italian} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Italian Cuisine' onClick={getHiddenMenu}>Italian Cuisine</button>
            
            </div>
            <div className="menurecipebox">
                <img src={mexican} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Mexican Cuisine' onClick={getHiddenMenu}>Mexican Cuisine</button>
            
            </div>
            <div className="menurecipebox">
                <img src={japanese} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Japanese Cuisine' onClick={getHiddenMenu}>Japanese Cuisine</button>
            
            </div>
            <div className="menurecipebox">
                <img src={middleeast} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Middle Eastern Cuisine' onClick={getHiddenMenu}>Middle Eastern Cuisine</button>
            
            </div>
            <div className="menurecipebox">
                <img src={nordic} className="menurecipeimg"/>
                <button className="showrecipeboxtitlebtn" value='Nordic Cuisine' onClick={getHiddenMenu}>Nordic Cuisine</button>
            
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

export default Cusinehrecipecontent;
