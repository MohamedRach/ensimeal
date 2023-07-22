//import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import LoadingSkeleton from "../components/LoadingSkeleton";
import { Suspense } from "react";
import SearchBar from "@/components/searchbar";
import Meal from "../components/meal";

import Nav from "@/components/navbar";


const Home = () => {
  
  return (
    <> 
    <div className="container">
      <Nav />
      <div className="meal-wrapper">
        <SearchBar></SearchBar>
        <div className = "meal-result">
                <h2 className = "title">Your Recipes:</h2>
        <Suspense fallback = {<LoadingSkeleton />}>
          <Meal></Meal>
        </Suspense>
        </div>
      </div>
    </div>
    </> 
  );
}
 
export default Home;