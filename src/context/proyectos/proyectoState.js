import React, { useReducer } from 'react';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

//state inicial de la administración de proyectos (edicion, eliminación, etc...)
const ProyectoState = props => {
    const initialState = {
        formulario: false
    }

    //Dispath para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState);

    //Serie de funciones para el CRUD de proyectos

    return(
        <proyectoContext.Provider
            value={{
                formulario: state.formulario
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
};

export default ProyectoState;