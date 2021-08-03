import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas"
import heroes from "../../data/heroes"

describe('Pruebas con promesas', () => {
    test('debe retornar un Heroe async',  ( done ) => { //done se llama cuando se termine
        const id = 1
        getHeroeByIdAsync( id ).then(heroe =>{
                expect(heroe).toBe(heroes[0]);
                done();
            });
    });

    test('debe retornar un error porque no encuentra el id',  ( done ) => { //done se llama cuando se termine
        const id = 10
        getHeroeByIdAsync( id )
            .catch(e =>{
                // eslint-disable-next-line jest/no-conditional-expect
                expect(e).toBe('No se pudo encontrar el héroe');
                done();
            })
    })

    
})
