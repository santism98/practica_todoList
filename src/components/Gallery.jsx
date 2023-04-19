
import { useState } from "react"
import { Form } from "./Form"
import { Grid } from "./Grid"



export const Gallery = () => {

    const [tarea, setTarea] = useState('')


    const getTarea=(todo)=>{

        setTarea(todo)

    }



    return (

        <>
            <h2 className="categoria text-left">Añadir Tarea</h2>

            <Form getTarea={getTarea}  />




            <Grid />


        </>

    )
}
