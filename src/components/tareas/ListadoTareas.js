import React, { Fragment } from 'react';

const ListadoTareas = () => {

    const tareas = [
        { nombre: 'Elegir Plataforma', estado: true },
        { nombre: 'Elegir Colores', estado: false },
        { nombre: 'Elegir Plataformas de pago', estado: false },
        { nombre: 'Elegir Elegir Hosting', estado: true },
    ]
    return (
        <Fragment>
            <h2>Proyecto: Tienda Virtual</h2>

            <ul className="listado-tareas"></ul>
        </Fragment>
    );
}
 
export default ListadoTareas;