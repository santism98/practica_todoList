import { useState } from "react";
import { useTodoList } from '../hooks/useTodoList'

export const Form = () => {
  const [formulario, setFormulario] = useState('');
  const { addTodo } = useTodoList(); // obtener addTodo desde el hook useTodoList

  const handleSubmit = (ev) => {
    ev.preventDefault();

    const data = {
      task: ev.target.task.value,
      description: ev.target.description.value,
    };

    addTodo(data); // utilizar la función addTodo

    setFormulario('');
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;

    if (formulario === '') return;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Tarea" name="task" onChange={handleChange} />
      <textarea
        type="text"
        placeholder="Descripcion"
        name="description"
        onChange={handleChange}
      />
      <input type="submit" value="Añadir tarea" />
    </form>
  );
};
