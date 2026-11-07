import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import "./components/App.css";
import Todoitem from "./components/Todoitem.jsx";
import TodoItems from "./components/TodoItems.jsx";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: 4 / 10 / 2026,
    },
    {
      name: "Go to College",
      dueDate: 4 / 10 / 2026,
    },
  ];
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
