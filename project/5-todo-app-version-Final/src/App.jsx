import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import "./components/App.css";
import Todoitem from "./components/Todoitem.jsx";
import TodoItems from "./components/TodoItems.jsx";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage.jsx";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handDeleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItem);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems
        todoItems={todoItems}
        onDeleteClick={handDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
