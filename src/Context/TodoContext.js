import { createContext, useContext, useState } from "react";
import {v4} from "uuid"


const TodoContext=createContext();


export const TodoContextProvider=({children})=>{
    const [filter,setFilter]=useState("all");
    const[todos,setTodos]=useState([

        {
           id:1,
           text:"Learn React",
           completed:true,

        },
     
    ]);


    const addTodo=(text)=>{

     setTodos((prev)=>[...prev,{id:v4(),text,completed:false}])

    }

    const toggleTodo=(id)=>{

        const clonedTodos=[...todos];
        const index=clonedTodos.findIndex((todo)=>todo.id===id)
        const item=todos[index];
        item.completed=!item.completed;
        setTodos(clonedTodos);

    }

    const removeTodo=(id)=>{

    const clonedTodos=[...todos];
    const index=clonedTodos.findIndex((todo)=>todo.id===id);
    clonedTodos.splice(index,1);

    setTodos(clonedTodos)



    }

    const values={

     todos,
     setTodos,
     addTodo,
     toggleTodo,
     removeTodo,
     filter,
     setFilter,
    }
    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>



}

export const UseTodoContext=()=>{

const context=useContext(TodoContext);

if (context===undefined) {
    
    throw new Error("hata")
}

return context;

}

