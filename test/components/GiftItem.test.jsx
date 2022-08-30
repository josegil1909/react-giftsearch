import { render, screen } from '@testing-library/react';//esto para renderizar el componente
//basicamente aqui se va a tomar una foto y compararla
import { GiftItem } from "../../src/components/GiftItem"

describe('pruebas en el componente <GiftItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg';


    test('debe de hacer match con el snapshot', () => {


        const { container } = render(<GiftItem title={title} url={url} />)
        expect(container).toMatchSnapshot();

    })

    test('debe de mostrar la imagen con el URL y el ATL indicado', () => {
        render(<GiftItem title={title} url={url} />)
        //screen.debug(); es para ver que esta renderizando por consola | imp react
        // screen.debug();

        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(alt);


    })


    test('debe de mostrar el titulo en el componente', () => {


        render(<GiftItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();

    })
})