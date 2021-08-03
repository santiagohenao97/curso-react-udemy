//Objetos literales

const persona = {
    nombre: 'santiago',
    apellido: 'Henao',
    edad: 19,
    direccion:{
        ciudad: 'Medellín',
        zip: 1324,
    }
}

console.log({persona: persona})
console.log({persona})

 /*Esto no crea un clon, solo guarda el espacio de memoria
const persona2 = persona
persona2.nombre = 'Fernando' */

//Esta es la forma correcta de copiar las propiedasdes de un objeto
const persona2 = {...persona}
persona2.nombre = 'Andrés'

console.log(persona)
console.log(persona2)
