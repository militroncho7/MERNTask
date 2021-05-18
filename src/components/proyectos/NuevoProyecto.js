import React, { Fragment, useState } from 'react';

const NuevoProyecto = () => {

    //Definir State para proyectos
    const [proyecto, guardarProyecto] = useState({
        nombre: ''
    });

    //Extraer nombre del proyecto (Destructuring)
    const { nombre } = proyecto;

    //Lee los contenidos del input
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        });
    };

    //cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        //validar proyecto

        //agregar al state

        //reiniciar el form
    }

    return(
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>

            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />

                <input
                    type="submit"
                    className="btn btn-primario btn-block"
                    value="Agregar Proyecto"
                />

            </form>
        </Fragment>
    )
};

export default NuevoProyecto;