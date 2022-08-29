import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }


    //useEffect es para usarlo una sola ves y que no renderice mucho
    useEffect(() => {
        getImages();

    }, []);


    return {
        images,
        isLoading
    }
}
