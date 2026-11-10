import React from "react";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";

function App() {
  let foodItem = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <ErrorMessage items={foodItem}></ErrorMessage>
        <FoodItems items={foodItem}></FoodItems>
      </Container>

      <Container>
        <p>
          Above is the list of the healthy foods that are good for your health
          and well being
        </p>
      </Container>
    </>
  );
}

export default App;
