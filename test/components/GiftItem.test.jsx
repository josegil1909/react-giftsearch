import { render } from '@testing-library/react';//esto para renderizar el componente
//basicamente aqui se va a tomar una foto y compararla
import { GiftItem } from "../../src/components/GiftItem"

describe('pruebas en el componente <GiftItem />', () => { 

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';

    
    test('debe de hacer match con el snapshot', () => { 


        const { container } = render(<GiftItem title = { title } url = { url }  />)
        expect( container ).toMatchSnapshot();

     })
 })