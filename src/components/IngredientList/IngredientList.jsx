// src/components/IngredientList/IngredientList.jsx

// const IngredientList = (props) => {
//     return <ul>// map through props.ingredients</ul>;
//   };
  
//   export default IngredientList;
const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <div>
      <h2>Available Ingredients</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => addToBurger(ingredient)}>+</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;