import { createContext, useContext, useState } from "react";
import {v4} from "uuid"


const TodoContext=createContext();


export const TodoContextProvider=({children})=>{

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

    const values={

     todos,
     setTodos,
     addTodo,
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

