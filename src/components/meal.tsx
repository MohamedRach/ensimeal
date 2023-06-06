import { prisma } from "../app/db";
import EditableMeals from "./EditableMeals";
function getMeals(){
    return prisma.recipe.findMany();
}
const Meal = async () => {
    const meals = await getMeals()
    return (
        <>
            <div className="meal-result">
                <EditableMeals meals={meals}></EditableMeals>
            </div>
        </>
    );
}
 
export default Meal;