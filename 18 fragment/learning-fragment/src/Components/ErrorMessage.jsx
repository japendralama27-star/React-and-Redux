const ErrorMessage = () => {
  let foodItem = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];

  return <>{foodItem.length === 0 ? <h3>i am still hungry</h3> : null}</>;
};

export default ErrorMessage;
