"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
const SearchBar = () => {
    const [query , setQuery] = useState("");
    const router= useRouter();
    const onSearch = (e: React.FormEvent) => {
        e.preventDefault()
        const encodedSearchQuery = encodeURI(query)
        router.push(`/search?q=${encodedSearchQuery}`)
    }
    return (
        <>
            <div className= "meal-search">
                <h2 className= "title">Find Meals For Your Ingredients</h2>
                <blockquote>Real food doesnt have ingredients, real food is ingredients.<br></br>
                <cite>- Jamie Oliver</cite>
                </blockquote>

                <form className= "meal-search-box" onSubmit={onSearch}>
                    <input type = "text" className="search-control" placeholder="Enter an ingredient" id = "search-input" onChange={(e) => setQuery(e.target.value) } />
                    <input type = "submit" className="search-btn btn" id = "search-btn" value="Search"/>
                </form>
            </div>
        </>
    );
}
 
export default SearchBar;