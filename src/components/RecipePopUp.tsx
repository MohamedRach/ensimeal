import { Dispatch, SetStateAction } from "react";
type mealProps= {
    title?: string
    description?: string
    ingredients?: string
    recipe?: string
    prep_time?: number
}
const RecipePopUp = ({open, setIsOpen, meal}: {open: boolean, setIsOpen: Dispatch<SetStateAction<boolean>>, meal:mealProps}) => {
    if (!open) return null;
    return (
        <div  className='overlay'>
        <div
            onClick={(e) => {
            e.stopPropagation();
            }}
            className='modalContainer'
        >
            
            <div className='modalRight'>
            <p onClick={() => setIsOpen(false)} className='closeBtn' >
                X
            </p>
            <div className='content'>
                <h1 className="center-text">{meal.title}</h1>
                <p className="center-text">{meal.description} </p>
                <p><span>preparation time:</span> {meal.prep_time}</p>
                <p><span>Ingredients:</span> {meal.ingredients}</p>
                <p><span>Recipe:</span> {meal.recipe}</p>
            </div>
            
            </div>
        </div>
        </div>
    );
}
 
export default RecipePopUp;