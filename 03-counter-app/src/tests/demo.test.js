//Dentro del describe van todas las pruebas
describe('Pruebas en el archivo demo.test.js', ()=>{
    test('debe de ser iguales los string', () => {
        //1. inicialización
        const mensaje = "hola mundo"
     
        //"2. Estímulo"
        const mensaje2 = "hola mundo"
     
        //3. Observar el comportamiento 
        //Se está usando JEST
        expect( mensaje).toBe(mensaje2)
     })
})


