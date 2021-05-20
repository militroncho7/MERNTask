import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    VALIDAR_FORMULARIO
    } from '../../types';


//state inicial de la administración de proyectos (edicion, eliminación, etc...)
const ProyectoState = props => {

    const proyectos = [
        { id: 1, nombre: 'tienda virtual' },
        { id: 2, nombre: 'Intranet' },
        { id: 3, nombre: 'Diseño de Sitio Web' },
        { id: 4, nombre: 'MERN'}
    ];

    const initialState = {
        proyectos : [],
        formulario: false,
        errorformulario: false
    }

    //Dispath para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //Serie de funciones para el CRUD de proyectos

    //función que muestra el formulario
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        });
    };

    //obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    };

    //Agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuidv4();

        //agregamos el proyecto en el state con un dispatch
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        });
    };

    //Validar formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    }

    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
};

export default ProyectoState;