import Item from "./Item";

const FoodItems = () => {
  // let foodItem = [];
  let foodItem = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return (
    <ul className="list-group">
      {foodItem.map((item) => (
        <Item ></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
