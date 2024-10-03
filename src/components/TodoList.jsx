import TodoCard from "./TodoCard"
const TodoList = (props) => {
    const {todos}=props;
    return (
        <ul className="main">
            {
                todos.map((todo, index)=>{
                    return (
                        <TodoCard index={index} {...props} key={index}>
                            <p>
                                {todo}
                            </p>
                        </TodoCard> 
                )})
            }
        </ul>
    )
}

export default TodoList