import { shallow } from 'enzyme';
import React from 'react';
import CounterApp from '../CounterApp'

describe('Pruebas en <CounterApp />', () => {

    let wrapper = shallow(<CounterApp />);
    //Antes de todas las pruebas hace lo que está dentro del beforeEach
    beforeEach(()=>{
        wrapper = shallow(<CounterApp />);
    })

    test('debe mostrar <CounterApp/> correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    })

    test('debe mostrar el valor por defecto de 100', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value = {value}/>);
        const counterText = wrapper.find('h2').text().trim(); //trim elimina los espacios en blanco
        console.log(counterText);
        expect(counterText).toBe(`${value}`);
        
    })

    test('debe de incrementar con el botón +1', ()=>{
        
        wrapper.find('button').at(0).simulate('click'); //posición 1 es -1
        const counterText = wrapper.find('h2').text().trim()
        expect(counterText).toBe(`${parseInt(counterText) +1}`);

    })

    test('debe de decrementar con el botón -1', ()=>{
        
        wrapper.find('button').at(2).simulate('click'); //posición 1 es -1
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe(`${parseInt(counterText) -1}`);

    })

    test('debe reiniciar con el valor por defecto', () => {
        const value = 100;
        const wrapper = shallow(<CounterApp value = {value}/>);
        wrapper.find('button').at(2).simulate('click'); //posición 1 es -1
        wrapper.find('button').at(1).simulate('click'); //posición del reset
        
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe(`${parseInt(value)}`);
    })
    
})
