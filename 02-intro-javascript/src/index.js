//condicional ternario

const activo = true;
let mensaje = ''

if(activo){
    mensaje='activo'
}else{
    mensaje='inactivo'
}

const mensaje2 = (!activo) ? 'Activo' : 'Inactivo'

const mensaje3 = activo && 'holis' // SI el activo es igual a true va a regresar 'holis'

console.log(mensaje)
console.log(mensaje2)
console.log(mensaje3)