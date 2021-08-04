import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import GifGrid from './components/GifGrid';

const GifExpertApp = () =>{

    const [categories, setCategories] = useState(['One Piece'])

    return(
        <>
            <h2>GifExpertApp</h2>
            <hr></hr>
            <AddCategory setCategories={setCategories}/>
                {categories.map( category => <GifGrid category={category}/>)}
        </>
    );
}

export default GifExpertApp