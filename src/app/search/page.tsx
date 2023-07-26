"use client"
import { useSearchParams } from "next/navigation";
import useSWR from 'swr'
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { Suspense } from "react";
import SearchBar from "@/components/searchbar";

import { useState } from "react";
import Nav from "@/components/navbar";

type mealProps= {
    id?: number,
    title?: string
    description?: string
    ingredients?: string
    recipe?: string
    prep_time?: number
}
const ferchMeals = async (url: string) => {
    const response = await fetch(url)
    if(!response.ok){
        throw new Error("Failed to fetch the api")
    }
    return response.json()
}
const SearchPage = () => {
    
    const search = useSearchParams()
    const searchQuery = search ? search.get('q') : null;
    const encodedSearchQuery = encodeURI(searchQuery || "")
    const {data, isLoading} = useSWR(`/api/search?q=${encodedSearchQuery}`, ferchMeals)
    console.log(isLoading)
    return (
        <>
           <div className="container">
      <Nav />
      <div className="meal-wrapper">
        <SearchBar></SearchBar>
        <div className = "meal-result">
                <h2 className = "title">Your Recipes:</h2>
                <Suspense fallback = {isLoading && <LoadingSkeleton />}>
                    {data && data.meals.map((meal: mealProps, i: number) => (
                            <div className = "meal-item" key={i}>
                            
                            <div className = "meal-name">
                            <h3>{meal.title}</h3>
                            <p>{meal.description}</p>
                            <p>prep time : {meal.prep_time} min</p>
                            <a className = "recipe-btn" href={`/recipe?id=${meal.id}`}>Get Recipe</a>
                            
                            </div>
                            </div>
                    ))}
                </Suspense>
        </div>
      </div>
    </div> 
        
        </>
    );
}
 
export default SearchPage;