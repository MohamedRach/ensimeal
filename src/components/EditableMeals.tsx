"use client"
import { useState } from "react";

import useStore from "@/app/store";
type mealProps= {
    id?: number
    title?: string
    description?: string
    ingredients?: string
    recipe?: string
    prep_time?: number
}
const EditableMeals = ({meals} : {meals: mealProps[]}) => {
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
                
                    <div className = "meal-name">
                        <h3>{meal.title}</h3>
                        <p>{meal.description}</p>
                        <p>prep time : {meal.prep_time} min</p>
                        <a className = "recipe-btn" href={`/recipe?id=${meal.id}`}>Get Recipe</a>
                        
                    </div>
                </div>
            ))}
            
        </div>
       
        </>
        
    );
}
 
export default EditableMeals;