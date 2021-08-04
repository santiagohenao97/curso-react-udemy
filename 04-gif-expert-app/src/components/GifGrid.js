import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import GifGridItem from './GifGridItem'

const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(() => { //Esto solo se ejecuta cuando se renderiza por primera vez
        getGifs()
    },[]) //si está vacio solo lo hace una vez, si no, cada que el array cambia

    const getGifs = async() =>{
        const url = `https://api.giphy.com/v1/gifs/search?api_key=4nYlt5ec3CMFclHF7rOYaZdhLMRn87cm&q=${encodeURI(category)}&limit=10`
        const resp = await fetch(url)
        const {data} = await resp.json() //Me interesa la data dentro de la data
        
        const gifs = data.map( img =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })
        console.log(gifs)
        setImages(gifs)
    }


    return (
        <>
        <h3 key={category}>{category}</h3> 
        <div className="card-grid">
           
                {images.map( img => (
                    <GifGridItem 
                        key={img.id} 
                        {...img}
                    /> //Envío los elementos del objeto img
                ))}
                
        </div>
        </>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
