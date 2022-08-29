
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
            <h1>GifExpertApp</h1>

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
