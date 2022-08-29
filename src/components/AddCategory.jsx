import { useState } from 'react'

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('')

    // const onInputChange = (event) => {
    //     setInputValue (event.target.value)
    // }
    //  o   
    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    };

    // Cuando se da enter evitara que recargue
    const onSubmit = (event) => {
        event.preventDefault();

        //Esto es para condicionar si esta vacio no haga nada
        if(inputValue.trim().length <= 1 ) return;
        // setCategories(categories => [inputValue, ...categories])
        onAddCategory ( inputValue.trim() );
        setInputValue('');

        // console.log(inputValue)
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gift"
                value={inputValue}
                // onChange={(event) => onInputChange(event)}
                onChange={onInputChange}
            />
        </form>

    )
}
