// src/components/BurgerStack/BurgerStack.jsx

// const BurgerStack = (props) => {
//     return <ul>// map through props.ingredients</ul>;
//   };
  
//   export default BurgerStack;
const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <div>
      <h2>Your Burger</h2>
      <ul>
        {stack.map((ingredient,val) => (
          <li style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => removeFromBurger(val)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BurgerStack;