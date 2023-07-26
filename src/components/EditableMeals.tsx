"use client"
import { useState } from "react";
import RecipePopUp from "./RecipePopUp";
import useStore from "@/app/store";
type mealProps= {
    title?: string
    description?: string
    ingredients?: string
    recipe?: string
    prep_time?: number
}
const EditableMeals = ({meals} : {meals: mealProps[]}) => {
    const [isOpen, setIsOpen] = useState(false)
    const store = useStore()
    if(store.meals.length === 0){
        store.setMeals(meals)
    } else if(store.meals.length === 1){
        store.meals.forEach(meall => (
            meals.push(meall)
        ))
        store.setMeals(meals)
    }
    console.log(store.meals)
    return (
        <>
        <div id="meal">
            {store.meals && store.meals.map((meal , i) => (
                <div className = "meal-item" key={i}>
                <div className = "meal-img">
                
                </div>
                <div className = "meal-name">
                <h3>{meal.title}</h3>
                <p>{meal.description}</p>
                <p>prep time : {meal.prep_time} min</p>
                <a className = "recipe-btn" onClick={() => setIsOpen(true)}>Get Recipe</a>
                {isOpen && <RecipePopUp open = {isOpen} setIsOpen = {setIsOpen} meal = {meal}></RecipePopUp>}
                </div>
                </div>
            ))}
        </div>
       
        </>
        
    );
}
 
export default EditableMeals;