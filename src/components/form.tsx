"use client"
import useStore from "@/app/store";
const Form = () => {
    const store = useStore()
    let title: string = "";
    let description: string = "";
    let ingredients: string = "";
    let recipe: string = "";
    let prep_time: number = 0;
    return (
        <div className="form-container">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={store.newMeal.title} onChange={(e) => title = e.target.value} />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" value={store.newMeal.description} onChange={(e) => description = e.target.value}/>
                <label htmlFor="ingredients">Ingredients</label>
                <input type="text" name="ingredients" value={store.newMeal.ingredients} onChange={(e) => ingredients = e.target.value}/>
                <label htmlFor="prep_time">Preparation time</label>
                <input type="number" name="prep_time" id="prep_time" value={store.newMeal.title} onChange={(e) => prep_time += +e.target.value} />
                <label htmlFor="recipe">Recipe</label>
                <textarea  name="recipe" value={store.newMeal.recipe} onChange={(e) => recipe = e.target.value}/>
                <input className="submit" type="submit" value="Add recipe" onClick={() => {store.setNewMeal({title, description, ingredients, recipe, prep_time}); store.addMeal(); console.log(store.meals)}} />
                
        </div>
    );
}
 
export default Form;