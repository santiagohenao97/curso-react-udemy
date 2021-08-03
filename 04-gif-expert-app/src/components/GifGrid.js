import React from 'react'
import PropTypes from 'prop-types'

const GifGrid = ({category}) => {

    const getGifs = async() =>{
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=4nYlt5ec3CMFclHF7rOYaZdhLMRn87cm&q=goku&limit=10'
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
    }

    getGifs()

    return (
        <div>
            <h3 key={category}>{category}</h3>
        </div>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}

export default GifGrid
