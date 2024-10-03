import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

const App = () => {
  const [todos, setTodos]=useState([]);
  const [todoValue, setTodoValue]=useState("");
  function PersistData(newlist){
    localStorage.setItem('todos',  JSON.stringify({todos:
      newlist
    }));
  }
  function AddTodo(newTodo){
    let newTodos=[...todos, newTodo];
    setTodos(newTodos);
    PersistData(newTodos);
  }
  function DeleteTodo(index){
    let newTodos=todos.filter( (todo, todoIndex)=>{
      return todoIndex!=index;
    });
    setTodos(newTodos);
    PersistData(newTodos);
  }
  function EditTodo(index){
    setTodoValue(todos[index]);
    DeleteTodo(index);
  }
  useEffect(()=>{
    if(!localStorage){
      return;
    }
    let localTodos=localStorage.getItem('todos');
    if(!localTodos){
      return;
    }
    setTodos(JSON.parse(localTodos).todos);
  }, []);
  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} AddTodo={AddTodo}/>
      <TodoList EditTodo={EditTodo} DeleteTodo={DeleteTodo} todos={todos}/>
    </>
  )
}

export default App