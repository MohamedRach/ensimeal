type mealProps= {
    title: string
    description: string
    prep_time: number
}
const EditableMeals = ({meals} : {meals: mealProps[]}) => {
    return (
        <div id="meal">
            {meals.map((meal) => (
                <div className = "meal-item">
                <div className = "meal-img">
                
                </div>
                <div className = "meal-name">
                <h3>{meal.title}</h3>
                <p>{meal.description}</p>
                <p>prep time : {meal.prep_time} min</p>
                <a href = "#" className = "recipe-btn">Get Recipe</a>
                </div>
                </div>
            ))}
        </div>
    );
}
 
export default EditableMeals;