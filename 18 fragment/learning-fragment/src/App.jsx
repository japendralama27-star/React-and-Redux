import React from "react";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  let foodItem = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  // if (foodItem.length === 0) {
  //   return <h3>Iam still hungry.....</h3>;
  // }

  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ErrorMessage></ErrorMessage>
      <FoodItems></FoodItems>
    </React.Fragment>
  );
}

export default App;
