
// const apiKey = '9vU2GEbvPof8BxjFjPiBfGk3EdyOBwRQ';

import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['one punch'])

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
        // console.log(newCategory)


    }


    return (
        <>
            <h1>Buscador de gifs :D </h1>
            <p>Colca el nombre los gift que quieras buscar</p>

            {/* <button onClick={ addCategory }>Agregar</button> */}

            <AddCategory

                // setCategories = { setCategories } 
                onAddCategory={onAddCategory}

            />

            {
                categories.map(category =>
                (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}
