const apiKey = '4nYlt5ec3CMFclHF7rOYaZdhLMRn87cm'

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion.then(res=>res.json())
    .then(({data})=>{
        const {url} = data.images.original
        const img = document.createElement('img')
        img.src = url
        document.body.append(img)
    })
    .catch(console.warn)