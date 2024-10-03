import { useState } from "react";

const TodoInput = (props) => {
    const {AddTodo, todoValue, setTodoValue}=props;
    return (
    <header>
        <input value={todoValue}
        placeholder="Enter todo..."
        onChange={(e)=>{
            setTodoValue(e.target.value);
        }}/>
        <button onClick={()=>{
            if(todoValue){
                AddTodo(todoValue);
                setTodoValue("")
            }
        }}>Add</button>
    </header>
  )
}

export default TodoInput