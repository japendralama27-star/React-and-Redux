import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import Todoitem1 from "./components/Todoitem1.jsx";
import Todoitem2 from "./components/Todoitem2.jsx";
import "./components/App.css";

function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />
      <div class="item-container">
        <Todoitem1 />
        <Todoitem2 />
      </div>
    </center>
  );
}

export default App;
