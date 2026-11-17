import styles from "./Item.module.css";

const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li
      className={`${styles["vegetable-item"]} list-group-item ${bought && "active"}`}
    >
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button
        className={`${styles.button} btn-solid theme-info`}
        // onClick={handleBuyButtonClicked} // Option A: Pass the function directly
        // OR
        onClick={handleBuyButton} // Option B: Call it via arrow function
      >
        Buy
      </button>
    </li>
  );
};

export default Item;
