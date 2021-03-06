import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import { v4 as uuidv4 } from 'uuid';

import { 
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
 } from '../../types';

const TareaState = props => {
    
    //definimos un state incial
    const initialState = {
        tareas: [
            { id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id: 3, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 },
            { id: 4, nombre: 'Elegir Elegir Hosting', estado: true, proyectoId: 4 },
            { id: 5, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { id: 6, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { id: 7, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 },
            { id: 8, nombre: 'Elegir Plataforma', estado: true, proyectoId: 4 },
            { id: 9, nombre: 'Elegir Colores', estado: false, proyectoId: 1 },
            { id: 10, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 2 },
            { id: 11, nombre: 'Elegir Plataforma', estado: true, proyectoId: 3 },
            { id: 12, nombre: 'Elegir Colores', estado: false, proyectoId: 4 },
            { id: 13, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 },
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    }

    //Crear dispatch y state
    const [ state, dispatch ] = useReducer(TareaReducer, initialState);

    //Crear las funciones:

    //Obtener las tareas del proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    };

    //Agregar una Tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        tarea.id = uuidv4();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    };

    //Valida y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    };

    //Eliminar tareas por id
    const eliminarTarea = id => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    };

    //Cambia el estado de cada tarea
    const cambiarEstadoTarea = tarea => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    };

    //Extrae una tarea para edici??n
    const guardarTareaActual = tarea => {
        dispatch({
            tye: TAREA_ACTUAL,
            payload: tarea
        })
    };

    //Edita o modifica una tarea
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    };

    //Elimina la tarea seleccionada del form
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA,
        })
    }

    return(
        <TareaContext.Provider
            value= {{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstadoTarea,
                guardarTareaActual,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
};

export default TareaState;