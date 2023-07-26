
import { redirect } from "next/navigation";
import { type } from "os";
import { prisma } from '../db'
import Form from "@/components/form";
const AddRecipe = () => {
    async function createRecipe(data: FormData){
        "use server"
        //console.log(data)
        const title = data.get('title')?.valueOf()
        const description = data.get('description')?.valueOf()
        const ingredients = data.get('ingredients')?.valueOf()
        const recipe = data.get('recipe')?.valueOf()
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
        if(typeof ingredients !== "string" || ingredients.length === 0){
            throw new Error("Invalid ingredients");
        }
        if(typeof recipe !== "string" || recipe.length === 0){
            throw new Error("Invalid recipe");
        }
        await prisma.recipe.create({data: {title, description, ingredients, recipe, prep_time:prepp_time}})
        fetch("http://localhost:3000/api/revalidate?path=/&secret=MOHAMED"); // revalidation
        redirect("/");
    }
    return (
        <form action={createRecipe} method="POST">
            <Form></Form>
            
        </form>
    );
}
 
export default AddRecipe;