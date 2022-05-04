import React, {useState, useEffect} from 'react'
import axios from 'axios';

const People = (props) =>{
    
    const [person, setPerson] = useState({});
    const [keys, setKeys] = useState([]);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${props.match.params.id}/?format=json`)
             .then( response => {
                setPerson(response.data)
                setKeys(Object.keys(response.data))
                // console.log(response.data)
                // console.log(Object.keys(response.data))
            } )
             .catch( error => {
                console.log(error);
             });
    }, [props.match.params.id]);
    
    return(
        <>
            {(keys!==[])?keys.filter((_, idx) => idx < 1).map((key)=>
                    <h2>{person[key]}</h2>):null
            }
        </>
    );
}



export default People;