
//buscar heroes y el lo busca en los archivos
//import { heroes } from "./data/heroes" primera forma

//Segunda forma: 
import heroes, {owners} from "../data/heroes" //Destructuring para owners

export const getHeroeById = (id) =>{
    return heroes.find(heroe => heroe.id === id)
}

const getHeroeByOwner = (owner)=>{
    return heroes.filter(heroe => heroe.owner === owner)
}

console.log(getHeroeById(3))
console.log(getHeroeByOwner('DC'))
console.log(owners)

