import { create } from "zustand";

type Meal = {
    title?: string,
    description?: string,
    ingredients?: string,
    recipe?: string,
    prep_time?: number
}
const addMeal = (meals: Meal[], meal: Meal): Meal[] => [
  ...meals, meal
]

type Store = {
    meals: Meal[];
    newMeal: Meal;
    addMeal: () => void;
    setNewMeal: (meal: Meal) => void;
    setMeals: (meals: Meal[]) => void;

}


const useStore = create<Store>((set): Store => ({
    
    meals : [],
    newMeal : {},
    addMeal(){
        set((state) =>({
            ...state,
            meals: addMeal(state.meals, state.newMeal),
            newMeal: {}
        }))
    },
    setNewMeal(meal: Meal){
        set((state) => ({
            ...state,
            newMeal: meal
        }))
    },
    setMeals: (meals: Meal[]) => 
      set((state) => ({
          ...state,
          meals,
        })),
    

}))

export default useStore