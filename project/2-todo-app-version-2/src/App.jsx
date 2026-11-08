import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import "./components/App.css";
import Todoitem from "./components/Todoitem.jsx";
import TodoItems from "./components/TodoItems.jsx";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "8/11/e2026",
    },
    {
      name: "Go to College",
      dueDate: "13/11/2026",
    },
    {
      name: "Date with Girlfriend",
      dueDate: "20/11/2026",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
