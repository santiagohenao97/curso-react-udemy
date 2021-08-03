
import { retornaArreglo } from "../../base-pruebas/07-deses-arr"

describe('Pruebas desestructuración', ()=>{
    test('debe retornar un string y un número', () => {
        
        //const arr = retornaArreglo(); //['ABC', 123]
        const [letras, numeros] = retornaArreglo(); //['ABC', 123]

        //expect(arr).toEqual(['ABC', 123])

        //otro tipo de pruebas
        expect(letras).toBe('ABC')
        expect(typeof letras).toBe('string')
        expect(numeros).toBe(123)
        expect(typeof numeros).toBe('number')
    })
    
})