import { useState } from "react";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

const App = () => {
  const [todos, setTodos]=useState([]);
  const [todoValue, setTodoValue]=useState("");
  function AddTodo(newTodo){
    let newTodos=[...todos, newTodo];
    setTodos(newTodos);
  }
  function DeleteTodo(index){
    let newTodos=todos.filter( (todo, todoIndex)=>{
      return todoIndex!=index;
    });
    setTodos(newTodos);
  }
  function EditTodo(index){
    setTodoValue(todos[index]);
    DeleteTodo(index);
  }
  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} AddTodo={AddTodo}/>
      <TodoList EditTodo={EditTodo} DeleteTodo={DeleteTodo} todos={todos}/>
    </>
  )
}

export default App