import red from './circleRed.png';
import yellow from './circleYellow.png';
import blue from './circleBlue.png';
import green from './circleGreen.png';
import turc from './circleTurc.png';
function MyRecipesComponents({label, image, calories, ingredients, description, fat, protein, carb, fiber, weight}) {
    return(<div>
        <div className="container">
        <h2>{label}</h2>
        </div>
        <div className="container">
        <img className='dish' src={image} alt="meal" /> 
        </div>
        <div className="container">
        <ul className=" list">
                    {ingredients.map((ingredient, index)=>(
                        <li key={index}>{ingredient}</li>
                    ))}
                      <p>Total weight {weight.toFixed(1)}g</p>
                </ul>
        </div>
        <div className="container nutr">
                       <h3><img src={red} alt='icon' width="20px"/>Protein {protein.toFixed(1)} g</h3>
                       <h3><img src={yellow} alt='icon' width="20px"/>Fat {fat.toFixed(1)} g</h3>
                       <h3><img src={blue} alt='icon' width="20px"/>Carbohydrates {carb.toFixed(1)} g</h3>
                       <h3><img src={green} alt='icon' width="20px"/>Fiber {fiber.toFixed(1)} g</h3>
                       <h3><img src={turc} alt='icon' width="20px"/>{calories.toFixed(1)}kcal</h3>
                    </div>
        <div className="container">
            <ol className="list">
                        {description.map((step, index) =>(
                            <li key={index}>{step}</li>
                        ))}
            </ol>
        </div>
    </div>
    )
}
export default MyRecipesComponents;