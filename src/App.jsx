import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName"; 
import TodoItem1 from "./components/Todoitem1"; 
import TodoItem2 from "./components/Todoitem2"; 
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div class="item-container">
        <TodoItem1 /> 
        <TodoItem2 />
      </div>
    </center>
  );
} 

export default App;
