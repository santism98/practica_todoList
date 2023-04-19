import { useState } from "react"


export const useForm = (estadoInicial) => {

    const [formulario, setFormulario] = useState(estadoInicial);
   
    const handleSubmit = (ev) => {

        ev.preventDefault()

        const data = {

            id: Date.now(),
            task: ev.target.task.value,
            description: ev.target.description.value,
            done: false,
            date: new Date()

        }

        setFormulario(data)

    }

    const handleChange = ({ target }) => {

        const { name, value } = target

        if (formulario == '') return

        setFormulario({

            ...formulario,
            [name]: value
        })

    }


    return {

        formulario,
        handleChange,
        handleSubmit,


    }


}



  // const serializarFormulario = (form) => {

    //     const formData = new FormData(form)

    //     const data = {}


    //     for (let [key, value] of formData) {

    //         data[key] = value

    //     }
       
    //     return data
        

    // }