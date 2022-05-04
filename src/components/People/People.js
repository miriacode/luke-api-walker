import React, {useState, useEffect} from 'react'
import axios from 'axios';

const People = (props) =>{
    
    const [person, setPerson] = useState({});
    const [keys, setKeys] = useState([]);

    //Bonus Ninja:
    const [homeworld, setHomeworld] = useState("");

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${props.match.params.id}/?format=json`)
             .then( response => {
                setPerson(response.data)
                setKeys(Object.keys(response.data))
                
                //Bonus Ninja:
                axios.get(`${response.data.homeworld}?format=json`)
                .then(homeworldResponse => setHomeworld(homeworldResponse.data.name))

             })
             .catch( error => console.log(error));   
             
    }, [props.match.params.id]);
    
    return(
        <>
            {(keys!==[])?keys.filter((_, idx) => idx < 5).map((key)=>
                    (key===keys[0])?
                    <h2>{person[key]}</h2>:
                    <p><b>{key.charAt(0).toUpperCase() + key.slice(1)}</b> : {person[key]}</p>):null}

            {/* Bonus Ninja: */}
            {(homeworld!=="")? <p><b>Homeworld:</b> {homeworld}</p>:null}
        </>
    )
}

export default People;