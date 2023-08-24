import { useParams } from "react-router-dom"
import { FormComponent } from "../../components/form/FormComponent"
import { useEffect, useState } from "react";

const todos = [
    {
        id: 1,
        title: 'Tarefa 1',
        description: 'yhskahkjhksjdhakjhdjkh',
        status: false,
    },
    {
        id: 2,
        title: 'Tarefa 2',
        description: 'yhskahkjhksjdhakjhdjkh',
        status: true,
    },
]

export const ToDoPage = () => {
   const { id } = useParams(); // useParams onbtem se a query passada na url
   const [todo, setTodo] = useState();
   
   useEffect(()=>{
    if(id) {
        setTodo(todos.find(item => item.id === Number(id)))
    }
   }, [])

    return (
        <div className="TodoFormContainer">
            { id ? 'Existe Tarefa' : 'Não existe tarefa' }
           <FormComponent todo={todo}/>
        </div>
        
    )
}