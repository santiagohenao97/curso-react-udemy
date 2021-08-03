//Variables y constantes

const nombre = 'Santiago';
const apellido = 'Henao';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto)

//También se puede enviar una función:
 const getSaludo = (nombre) =>{
    return `Hola ${nombre}`
 }

 console.log(`${getSaludo(nombreCompleto)}`)