//Destructuring

const persona = {
    nombre: 'Santiago',
    edad: 13,
    clave: '123',
    rango: 'Soldado',
    latlng:{
        lat: 12,
        lng: 13,
    },
};

//const { nombre } = persona //propiedad Nombre del objeto persona

const retornaPersona = ({clave, nombre, edad, rango='Capitan'}) =>{
    console.log(nombre, edad, rango) 

    return {
        nombreClave: clave,
        anios: edad,
    }
}
//Si no se le envía rango, devuelve capitán
retornaPersona( persona )

//Traer constantes de un objeto dentro de un ojeto
const {latlng:{lat, lng}} = persona

console.log(lat, lng)