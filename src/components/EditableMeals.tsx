"use client"
import { useState } from "react";
import RecipePopUp from "./RecipePopUp";
type mealProps= {
    title: string
    description: string
    prep_time: number
}
const EditableMeals = ({meals} : {meals: mealProps[]}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
        <div id="meal">
            {meals && meals.map((meal , i) => (
                <div className = "meal-item" key={i}>
                <div className = "meal-img">
                
                </div>
                <div className = "meal-name">
                <h3>{meal.title}</h3>
                <p>{meal.description}</p>
                <p>prep time : {meal.prep_time} min</p>
                <a className = "recipe-btn" onClick={() => setIsOpen(true)}>Get Recipe</a>
                {isOpen && <RecipePopUp open = {isOpen} setIsOpen = {setIsOpen}></RecipePopUp>}
                </div>
                </div>
            ))}
        </div>
       
        </>
        
    );
}
 
export default EditableMeals;