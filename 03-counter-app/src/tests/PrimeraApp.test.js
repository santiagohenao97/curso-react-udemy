import { getByText, render } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import PrimeraApp from '../PrimeraApp'

describe('Pruebas en <PrimeraApp />', () => {
    
    /*test('debe mostrar el mensaje Hola soy Gokú', () => {
        const saludo = 'Hola, soy Gokú';
        const {getByText} = render(<PrimeraApp saludo={saludo}/>)

        expect(getByText(saludo)).toBeInTheDocument()
    })*/

    //Usando Enzyme
    test('debe mostrar el mensaje Hola soy Gokú', () => {
        const saludo ='Hola, soy Gokú'
        const wrapper = shallow(<PrimeraApp saludo = {saludo}/>)
        expect( wrapper ).toMatchSnapshot()
        
    })

    test('debe mostrar un subtitulo', () => {
        const saludo ='Hola, soy Gokú'
        const subtitulo = 'Hola soy un subtitulo'

        const wrapper = shallow(<PrimeraApp saludo = {saludo} subtitulo={subtitulo}/>)
        
        const textoParrafo = wrapper.find('h3').text()
        console.log(textoParrafo)
        expect(textoParrafo).toBe(subtitulo)
        
    })
})
