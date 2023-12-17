import { useEffect, useState } from 'react';
import './App.css';
import icon from './search64.png';
import MyRecipesComponents from './MyRecipesComponent';

//https://api.edamam.com/api/recipes/v2?type=public&q=kale&app_id=${MY_ID}&app_key=${MY_KEY}
function App() {
  const MY_ID = "6428aefd&app";
  const MY_KEY ="c1c64a921c4402f745e5851ef5f348c8";
  const [mySearch, setMySearch] = useState("");
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] =useState("kale");

    useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
      console.log(data);
    }
    getRecipe()
  }, [wordSubmitted])

  const myRecipeSearch = (e) => {
setMySearch(e.target.value)
console.log(e.target.value)
  }
  const finalSearch= (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch)
}
  return (
    <div className="App">
      <div className='container'>
        <h1>Find a Recipe</h1>
      </div>
      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='search' onChange={myRecipeSearch} value={mySearch}/>
        </form>
        <button onClick={finalSearch}>
          <img src={icon} alt="loupe" width="50px" />
        </button>
      </div>

      {myRecipes.map((element, index) => (
        <MyRecipesComponents key={index}
        label={element.recipe.label}
        image={element.recipe.image}
        calories={element.recipe.calories}
        ingredients={element.recipe.ingredientLines}
        description={element.recipe.instructionLines}
        fat={element.recipe.totalNutrients.FAT.quantity}
        protein={element.recipe.totalNutrients.PROCNT.quantity}
        carb={element.recipe.totalNutrients.CHOCDF.quantity}
        fiber={element.recipe.totalNutrients.FIBTG.quantity}
        weight={element.recipe.totalWeight}
          />
        ))}
    </div>
  );
}

export default App;
