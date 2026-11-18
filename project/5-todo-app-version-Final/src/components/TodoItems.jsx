import Todoitem from "./Todoitem";
import style from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={style.itemContainer}>
      {todoItems.map((item) => (
        <Todoitem
          key={item.name}
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></Todoitem>
      ))}
    </div>
  );
};

export default TodoItems;
