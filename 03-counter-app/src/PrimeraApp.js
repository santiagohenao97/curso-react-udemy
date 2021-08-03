//Functionals components FC
import React from 'react';
import PropTypes from 'prop-types'

const PrimeraApp = ({saludo = 'Hola por defecto', subtitulo}) =>{ 
    //una forma de enviar props por defecto

    /*const saludito  = 'Hola Mundo '//No imprime booleanos, ni objetos directamente
    const objeto  = {
        nombre: "santiago",
        edad: 24
    }*/

    return (
        <>
            <h1>{ saludo }</h1>
            <h3>{ subtitulo }</h3>
            {/*<h3>{ saludito }</h3>
            <pre> {JSON.stringify(objeto) }</pre>*/}
            <p>Mi primera aplicación</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaultProps = { //Es otra forma de enviar props por defecto
    subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp
