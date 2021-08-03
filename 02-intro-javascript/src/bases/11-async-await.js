

const  getImage = async () =>{

    try {
        const apiKey = '4nYlt5ec3CMFclHF7rOYaZdhLMRn87cm'
        const res = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await res.json()
        const {url} = data.images.original
        console.log(data)
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    } catch (error) {
        console.log(error)
    }
    
}

getImage()


