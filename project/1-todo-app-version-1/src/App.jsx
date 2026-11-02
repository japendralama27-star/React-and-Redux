import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import todoitem1 from "./components/todoItem.jsx";
function App() {
  return (
    <center class="todo-container">
      <AppName />
      <AddTodo />

      <Todoitem1 />
      <div class="row">
        <div class="col-6">Go to College</div>
        <div class="col-4">4/10/2026</div>
        <div class="col-2">
          <button type="button" class="btn-solid theme-danger">
            Danger
          </button>
        </div>
      </div>
    </center>
  );
}

export default App;
