"use client"
import { useSearchParams } from "next/navigation";
import useSWR from 'swr'
import LoadingSkeleton from "@/components/LoadingSkeleton";
import { Suspense } from "react";
import SearchBar from "@/components/searchbar";
import EditableMeals from "@/components/EditableMeals";
import Nav from "@/components/navbar";
const ferchPosts = async (url: string) => {
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
    const {data, isLoading} = useSWR(`/api/search?q=${encodedSearchQuery}`, ferchPosts)
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
           {data && <EditableMeals meals={data.meals}></EditableMeals>}
        </Suspense>
        </div>
      </div>
    </div> 
        
        </>
    );
}
 
export default SearchPage;