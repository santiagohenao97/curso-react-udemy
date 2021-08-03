import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from '../../data/heroes'

describe('Pruebas en funciones de Héroes', () => {
    test('Debe de retornar un hero por id',  () => {
        const id = 1;
        const heroe = getHeroeById( id );
        console.log(heroe)

        const heroeData = heroes.find( h => h.id === id)
        expect( heroe ).toEqual(heroeData)
    })

    test('Debe de retornar undefined si id no existe', () => {
        const id = 15;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe(undefined)
    })

    test('Debe de retornar un hero por owner', () => {
        const owner = 'DC';
        const heroe = getHeroesByOwner( owner );
        console.log(heroe)

        const heroeData = heroes.filter( h => h.owner === owner)
        expect( heroe ).toEqual(heroeData)
    })
    

    test('Debe de retornar el tamaño del array de los heroes por owner', () => {
        const owner = 'Marvel';
        const heroe = getHeroesByOwner( owner );
        console.log(heroe)

        const heroeData = heroes.filter( h => h.owner === owner)
        expect( heroeData.length).toBe(2)
    })
})
