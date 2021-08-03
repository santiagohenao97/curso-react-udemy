const saludar = function(nombre){
    return `Hola, ${nombre}`;
}

const saludar2 = (nombre) =>{
    return `Hola, ${nombre}`;
}

//const saludar3 = (nombre) =>`Hola, ${nombre}`;


console.log(saludar('Santiago'))
console.log(saludar2('Santiago'))

const getUser = () =>({
        uid: 'ABC',
        username: 'SHG13'
}) //Con los paréntesis le decimos que devolvemos un objeto

console.log(getUser())


//ACTIVIDAD
const getUsuarioActivo = (nombre) => (
    {
        uid: 34,
        username: nombre,
    })

const usuarioActivo = getUsuarioActivo('Santiago')
console.log(usuarioActivo)