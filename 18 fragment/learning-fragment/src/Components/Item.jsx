import styles from "./Item.module.css";

const Item = ({ foodItem }) => {
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${foodItem} is bought`);
  };

  return (
    <li className={`${styles["vegetable-item"]} list-group-item`}>
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn-solid theme-info`}
        // onClick={handleBuyButtonClicked} // Option A: Pass the function directly
        // OR
        onClick={(event) => handleBuyButtonClicked(event)} // Option B: Call it via arrow function
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
