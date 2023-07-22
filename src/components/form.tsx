"use client"
import useStore from "@/app/store";
const Form = () => {
    const store = useStore()
    let title: string = "";
    let description: string = "";
    let prep_time: number = 0;
    return (
        <div className="form-container">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={store.newMeal.title} onChange={(e) => title = e.target.value} />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" value={store.newMeal.description} onChange={(e) => description = e.target.value}/>
                <label htmlFor="prep_time">Preparation time</label>
                <input type="number" name="prep_time" id="prep_time" value={store.newMeal.title} onChange={(e) => prep_time += +e.target.value} />
                <input className="submit" type="submit" value="Add recipe" onClick={() => {store.setNewMeal({title, description, prep_time}); store.addMeal(); console.log(store.meals)}} />
                
        </div>
    );
}
 
export default Form;