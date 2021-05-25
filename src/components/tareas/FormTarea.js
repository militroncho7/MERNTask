import React, { useContext, useState, useEffect } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const FormTarea = () => {

    //Extraer si un proyecto está activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //Obtener la función del context de tarea
    const tareasContext = useContext(tareaContext);
    const { tareaseleccionada, errortarea, agregarTarea, validarTarea, obtenerTareas, actualizarTarea } = tareasContext;

    //useEffect que detecta si hya una tarea seleccionada
    useEffect(() => {
        if(tareaseleccionada !== null) {
            guardarTarea(tareaseleccionada);
        } else {
            guardarTarea({
                nombre: ''
            })
        }
    }, [tareaseleccionada]);

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
        if(nombre.trim() === ''){
            validarTarea();
            return;
        }

        //Revisar si es edición o es nueva tarea
        if(tareaseleccionada === null) {
            //pasar la validacion: SE HACE DESDE EL REDUCER

            //agregar nueva tarea al state de tareas
            tarea.proyectoId = proyectoActual.id;
            tarea.estado = false;
            agregarTarea();
        } else  {
            //Actualiza la tarea existente
            actualizarTarea(tarea);
        }

        //Obtener y filtar las tareas del proyecto
        obtenerTareas(proyectoActual.id);

        //reiniciar form
        guardarTarea({
            nombre:''
        })
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
                        value={tareaseleccionada ? 'Editar tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>

            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
        
    );
}
 
export default FormTarea;