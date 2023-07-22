import { redirect } from "next/navigation";
import { type } from "os";
import { prisma } from '../db'
const AddRecipe = () => {
    async function createRecipe(data: FormData){
        "use server"
        //console.log(data)
        const title = data.get('title')?.valueOf()
        const description = data.get('description')?.valueOf()
        const prep_time = data.get('prep_time')?.valueOf()
        if(prep_time !== undefined){
            var prepp_time : number = +prep_time
        } else{
            var prepp_time: number = 0
        }
        
        console.log(typeof prep_time)
        if(typeof title !== "string" || title.length === 0){
            throw new Error("Invalid Title");
        }
        if(typeof description !== "string" || description.length === 0){
            throw new Error("Invalid Description");
        }
        
        await prisma.recipe.create({data: {title, description, prep_time:prepp_time}})
        fetch("http://localhost:3000/api/revalidate?path=/&secret=MOHAMED"); // revalidation
        redirect("/");
    }
    return (
        <form action={createRecipe} method="POST">
            <div className="form-container">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" />
                <label htmlFor="prep_time">Preparation time</label>
                <input type="number" name="prep_time" id="prep_time" />
                <input className="submit" type="submit" value="Add recipe" />
            </div>
            
        </form>
    );
}
 
export default AddRecipe;