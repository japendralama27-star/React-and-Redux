import styles from "./Item.module.css";

const Item = (props) => {
  return (
    <li className={`$(styles['vegetable-item'])`}>
      <span className={styles["kg-span"]}>{props.foodItem}</span>
    </li>
  );
};
export default Item;
