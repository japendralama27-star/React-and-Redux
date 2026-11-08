import Todoitem from "./Todoitem";
import style from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={style.itemContainer}>
      {todoItems.map((item) => (
        <Todoitem todoDate={item.dueDate} todoName={item.name}></Todoitem>
      ))}
    </div>
  );
};

export default TodoItems;
