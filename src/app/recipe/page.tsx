"use client"
import { useSearchParams } from "next/navigation"
import useSWR from 'swr'
type Meal = {
    id?: number
    title?: string
    description?: string
    ingredients?: string
    recipe?: string
    prep_time?: number
}
const ferchRecipe = async (url: string) => {
    const response = await fetch(url)
    if(!response.ok){
        throw new Error("Failed to fetch the api")
    }
    return response.json()
}

const RecipePage = () => {
    const id = useSearchParams()
    const idQuery = id ? id.get('id') : null;
    const encodedIdQuery = encodeURI(idQuery || "")
    const {data, isLoading} = useSWR(`/api/recipe?id=${encodedIdQuery}`, ferchRecipe)
    //console.log(data.meal)
    return (
        <div  className='overlay'>
        <div
            onClick={(e) => {
            e.stopPropagation();
            }}
            className='modalContainer'
        >
            
            <div className='modalRight'>
            {data && data.meal.map((mel: Meal, i: number) => (
                <div className='content' key={i}>
                <h1 className="center-text">{mel.title}</h1>
                <p className="center-text">{mel.description} </p>
                <p><span>preparation time:</span> {mel.prep_time}</p>
                <p><span>Ingredients:</span> {mel.ingredients}</p>
                <p><span>Recipe:</span> {mel.recipe}</p>
            </div>
            ))}
            
            
            </div>
        </div>
        </div>
    );
}
 
export default RecipePage;