import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', ()=>{
    test('getUser debe retornar un objeto', () => {
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser()
        expect(user).toEqual(userTest)

        //No aplica el ToBe porque {} === {} cada objeto vacío apunta a un espacio de memoria diferente
    })

    test('getUserActivo debe retornar un objeto pasandole el nombre', () => {
        const nombre  = 'Pedro'
        const user = getUsuarioActivo(nombre)
        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        })
        console.log(user)
    })
    
})