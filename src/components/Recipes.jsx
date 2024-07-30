import {useState} from 'react';

const elvenShieldRecipe = {
    leatherStrips :2,
    ironIngot :1,
    refinedMoonstone : 4
};

const elvenGrantletsRecipe={
    ...elvenShieldRecipe,
    leather:1,
    refinedMoonstone:4
    
}
console.log(elvenShieldRecipe);
console.log(elvenGrantletsRecipe)



const Recipes = () => {
    const [recipe, setRecipe] = useState({});
  return (
    <div>
        <h3>Current Recipe : </h3>
        <button onClick={()=>setRecipe(elvenShieldRecipe)}>Elven Shield Recipe </button>
        <button onClick={()=>setRecipe(elvenGrantletsRecipe)}>Elven Gauntlet Recipe </button>
        <ul>
            {
                Object.keys(recipe).map((material)=>(
                    <li keys={material}>
                        {material} : {recipe[material]}
                     </li>
                ))
            }
        </ul>
    </div>
  )
}

export default Recipes