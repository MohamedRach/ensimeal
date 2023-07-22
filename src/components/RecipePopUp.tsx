import { Dispatch, SetStateAction } from "react";

const RecipePopUp = ({open, setIsOpen}: {open: boolean, setIsOpen: Dispatch<SetStateAction<boolean>>}) => {
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
                <h1 className="center-text">chicken tagine</h1>
                <p className="center-text">this is the perfect meal for your a cozy lunch </p>
                <p><span>preparation time:</span> 30 min</p>
                <p><span>Ingredients:</span> chicken, vegetables, spices</p>
                <p><span>Recipe:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam velit eaque nobis necessitatibus voluptate consequatur, optio quas eum quaerat ipsa alias numquam minus, error maiores, harum pariatur perspiciatis quam repudiandae.</p>
            </div>
            
            </div>
        </div>
        </div>
    );
}
 
export default RecipePopUp;