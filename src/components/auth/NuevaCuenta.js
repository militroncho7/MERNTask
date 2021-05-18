import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NuevaCuenta = () => {

    //State para iniciar sesión
    const [usuario, guardarUsuario] = useState({
        nombre: '',
        email: '',
        password: '',
        confirmar: ''
    });

    //Extraer del usuario
    const { nombre, email, password, confirmar } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        });
    };

    //Cuando el usuario inicia sesión
    const onsubmit = e => {
        e.preventDefault();

        //validar que no hay campos vacios

        //Password minimo 6 caracteres

        //Los 2 passwords son iguales

        //pasarlo al action(reducer)
    };

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crea tu cuenta</h1>

                <form
                    onSubmit={onsubmit}
                >
                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu nombre"
                            value={nombre}
                            onChange={onChange}
                            ></input>
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu email"
                            value={email}
                            onChange={onChange}
                            ></input>
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu password"
                            value={password}
                            onChange={onChange}
                            ></input>
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Passwor</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu password"
                            value={confirmar}
                            onChange={onChange}
                            ></input>
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Registrarme" />
                    </div>
                </form>

                <Link to={'/'} className="enlace-cuenta">
                    Volver a iniciar sesión
                </Link>
            </div>
        </div>
    );
}
 
export default NuevaCuenta;