'use client'
import { useState } from "react";

const SearchBar = () => {
    const [query , setQuery] = useState("");
    return (
        <>
            <div className= "meal-search">
                <h2 className= "title">Find Meals For Your Ingredients</h2>
                <blockquote>Real food doesn't have ingredients, real food is ingredients.<br></br>
                <cite>- Jamie Oliver</cite>
                </blockquote>

                <div className= "meal-search-box">
                    <input type = "text" className="search-control" placeholder="Enter an ingredient" id = "search-input" onChange={(e) => setQuery(e.target.value) } />
                    <button type = "submit" className="search-btn btn" id = "search-btn">
                        Search
                    </button>
                </div>
            </div>
        </>
    );
}
 
export default SearchBar;