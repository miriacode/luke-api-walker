import React, {useState, useEffect} from 'react'
import axios from 'axios';


const People = (props) =>{
    
    const [person, setPerson] = useState('');

    // useEffect(() => {
    //     console.log(`https://swapi.dev/api/people/${props.match.params.id}/?format=json`)
    // },[])

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${props.match.params.id}/?format=json`)
             .then( response => {setPerson(response.data)
                console.log(response.data)} )
             .catch( err => console.log(err));
    }, [props.match.params.id]);
            
    return (
        <div>
            <h2>Name: {person.name}</h2>
            <p>Height: {person.height}</p>
            <p>Mass: {person.mass}</p>
            <p>Hair Color: {person.hair_color}</p>
            <p>Skin Color: {person.skin_color }</p>
        </div>
    )
}

export default People