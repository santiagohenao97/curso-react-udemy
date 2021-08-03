const personajes = ['Gokú', 'Vegeta', 'Trunks']
const [,p2] = personajes; //el segundo elemento
console.log(p2)

const retornaArreglo = () =>{
    return ['ABC', 123]
}
const [letras, numeros] = retornaArreglo()
console.log(letras, numeros)

//Tarea
const tarea = (valor) =>{
    return [valor, ()=>(console.log('Hola Mundo'))]
}

const [nombre, setNombre] = tarea('Gokú')
console.log(nombre)
setNombre()