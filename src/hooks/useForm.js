import { useState } from "react"


export const useForm = (estadoInicial) => {

    const [formulario, setFormulario] = useState(estadoInicial);
   

    const handleChange = ({ target }) => {

        const { name, value } = target

        if (formulario == '') return

        setFormulario({

            ...formulario,
            [name]: value
        })

    }


    return {

        handleChange,

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