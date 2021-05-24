import React, { useContext, useState } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    //Extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Obtener la función del context de tarea
    const tareasContext = useContext(tareaContext);
    const { agregarTarea } = tareasContext;

    //state del formulario
    const [ tarea, guardarTarea ] = useState({
        nombre: ''
    });

    //extraer nombre proyectos
    const { nombre } = tarea;

    //Si no hay proyecto seleccionado
    if(!proyecto) return null;

    //Array Destructuring para extraer el proyecto actual
    const [ proyectoActual ] = proyecto;

    //Leer los valores del formulario
    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        //validar

        //pasar la validacion

        //agregar nueva tarea al state de tareas
        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea();

        //reiniciar form
    }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar Tarea"
                    />
                </div>
            </form>
        </div>
        
    );
}
 
export default FormTarea;