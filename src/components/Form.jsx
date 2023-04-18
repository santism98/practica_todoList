
import { useForm } from "../hooks/useForm"



export const Form = () => {

 
    const {handleChange,handleSubmit, serializa} = useForm('')

    return (

        <>

            <form onSubmit={handleSubmit}>

                <input

                    type="text"
                    placeholder="Tarea"
                    name="task"
                    onChange={handleChange}

                />

                <textarea

                    type="text"
                    placeholder="Descripcion"
                    name="description"
                    onChange={handleChange}

                />

                <input

                    type="submit"
                    value="Añadir tarea"

                />



            </form>

        </>

    )
}




   // const [formulario, setFormulario] = useState('');

    // const handleSubmit = (ev) => {

    //     ev.preventDefault()

    //     const data = {

    //         task: ev.target.task.value,
    //         description: ev.target.description.value

    //     }

    //     setFormulario(data)
    //     //onNewTask(data)
    //     console.log(data)
        
    // }

    // const handleChange = ({ target }) => {

    //     const { name, value } = target

    //     if (formulario == '') return

    //     setFormulario({

    //         ...formulario,
    //         [name]: value

    //     })

    // }

