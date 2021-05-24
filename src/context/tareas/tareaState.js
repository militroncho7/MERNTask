import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { 
    TAREAS_PROYECTO
 } from '../../types';

const TareaState = props => {
    
    //definimos un state incial
    const initialState = {
        tareas: [
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 },
            { nombre: 'Elegir Elegir Hosting', estado: true, proyectoId: 4 },
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 },
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 4 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 1 },
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 2 },
            { nombre: 'Elegir Plataforma', estado: true, proyectoId: 3 },
            { nombre: 'Elegir Colores', estado: false, proyectoId: 4 },
            { nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 },
        ],
    }

    //Crear dispatch y state
    const [ state, dispatch ] = useReducer(TareaReducer, initialState);

    //Crear las funciones

    //Obtener las tareas del proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        });
    };

    return(
        <TareaContext.Provider
            value= {{
                tareas: state.tareas,
                obtenerTareas
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
};

export default TareaState;