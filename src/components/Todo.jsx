import { useState } from "react"
let globalID = 0;
function Todo() {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([])

    const CreateTodo = (event) => {
        event.preventDefault();

        setTodos((oldtodos) => {    //oldtodos get the todos here in empty array and you write just todos here but this is funational notaotion
            setTask('')
            return [...oldtodos, { todo:task, id: globalID++ }]
        })
    }

    const DeleteItem = (itemID)=>{
        setTodos(oldtodos => oldtodos.filter(item => item.id !== itemID))
                
    }

    return (
        <>

            <h1>todo app</h1>
            <form onSubmit={CreateTodo}>
                <input
                    type="text"
                    value={task}
                    onChange={
                        (e) => {
                            setTask(e.target.value)

                        }
                    }

                />
                <button type="submit"> Create Todo</button>
            </form>

            <ul>
                {todos.map((item,) => {
                    return<div key={item.id}>
                        <li>
                            {item.todo} 
                        </li>
                        <button onClick={()=> DeleteItem(item.id)}>delete</button>
                        </div>

                })}
            </ul>





        </>
    )
}

export default Todo;