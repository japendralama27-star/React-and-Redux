import React from "react";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";

function App() {
  let foodItem = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItem}></ErrorMessage>
      <FoodItems items={foodItem}></FoodItems>
    </React.Fragment>
  );
}

export default App;
