import React from 'react';
import style from './Resultpage.module.css';

const Recipe = ({title,calories,image,ingredients}) => {
    return(
        <div className={style.recipebox}>
        <p className={style.recipename}>{title}</p>
         <p className={style.recipelabel}><b>Calories :</b> { calories}</p>
        <p className={style.recipelabelingredients}><b>Ingredients</b></p>
        <p className={style.recipelabellist} >{ingredients.map(ingredient => (
            <p className={style.recipelabellist}>{ingredient.text}</p>

        ))}</p>
        <img src={image} alt="recipe images" className="recipe-images"/>
    </div>


    );
}
export default Recipe;