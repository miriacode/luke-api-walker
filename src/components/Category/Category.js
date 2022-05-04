import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Category = (props) =>{
    
    const [object, setObject] = useState({});
    const [keys, setKeys] = useState([]);

    const [error, setError] = useState(false);

    useEffect(() => {
        axios.get(`https://swapi.dev/api/${props.match.params.category}/${props.match.params.id}/?format=json`)
             .then( response => {
                setObject(response.data)
                setKeys(Object.keys(response.data))
                // console.log(response.data)
                // console.log(Object.keys(response.data))
            } )
             .catch( error => {
                console.log(error);
                setError(true);
             });
    }, [props.match.params.id]);
    
    if(!error){
        return (
            <div>
                {(keys!==[])?keys.filter((_, idx) => idx < 5).map((key)=>
                    (key===keys[0])?
                    <h2>{object[key]}</h2>:
                    <p><b>{key.charAt(0).toUpperCase() + key.slice(1)}</b> : {object[key]}</p>):null}
            </div>
    
            
        );
    }else{
        return(
            <>
                <p>These are not the droids you are looking for.</p>
                <img 
                src="https://elcomercio.pe/resizer/XJ_QLRISo3lrGWYtX86bVBiK2Hk=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/LO425SZFO5DONMKILCFEAUU2XE.jpg"
                alt="obi-wan-kenobi"
                />
            </>
        
        );
    }

}

export default Category