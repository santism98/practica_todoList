import { useForm } from "../hooks/useForm"


export const Form = ({handleNewTodo}) => {

    const { handleChange }=useForm('');

    const handleSubmit = (ev) => {

        ev.preventDefault()

        const data = {

            id: Date.now(),
            task: ev.target.task.value,
            description: ev.target.description.value,
            done: false,
            date: new Date()

        }

        handleNewTodo(data)
        
    }


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

