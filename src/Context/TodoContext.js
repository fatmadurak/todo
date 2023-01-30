import { createContext, useContext, useState } from "react";


const TodoContext=createContext();


export const TodoContextProvider=({children})=>{

    const[todos,setTodos]=useState([

        {
           id:1,
           text:"Learn React",
           completed:false,

        }
    ]);

    const values={

     todos,
     setTodos,
    }
    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>



}

const UseTodoContext=()=>{

const context=useContext(TodoContext);

if (context===undefined) {
    
    throw new Error("hata")
}

return context;

}

