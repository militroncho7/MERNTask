import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';
import { FORMULARIO_PROYECTO } from '../../types';

//state inicial de la administración de proyectos (edicion, eliminación, etc...)
const ProyectoState = props => {

    const initialState = {
        proyectos : [
            { id: 1, nombre: 'tienda virtual' },
            { id: 2, nombre: 'Intranet' },
            { id: 3, nombre: 'Diseño de Sitio Web' },
            { id: 4, nombre: 'MERN'}
        ],
        formulario: false
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

    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
};

export default ProyectoState;