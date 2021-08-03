import { getSaludo } from "../../base-pruebas/02-template-string";
import '@testing-library/jest-dom'

describe('Pruebas en templateString', ()=>{
    //Se deben exportar las funciones que se van a probar
    //Los console.log no deben estar
    test('getSaludo debe retornar hola + nombre', () => {
        const nombre = 'Santiago';
        const saludo = getSaludo( nombre );
        expect( saludo ).toBe('Hola ' + nombre)
        console.log(saludo)
    })

    test('getSaludo debe retornar hola anónimo si no hay argumentos en la función', () => {
        const saludo = getSaludo( );
        expect( saludo ).toBe('Hola anónimo')
        console.log(saludo)
    })
    

})