import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = () => {
    const [category, setCategory] = useState("");
    const [id, setId] = useState("");

    let history = useHistory()

    //FORM
    const handleCategory = (e) =>{
        setCategory(e.target.value);
    }

    const handleId = (e) =>{
        setId(e.target.value);
    }

    const handleSubmit = (e) => { 
        e.preventDefault();
        history.push(`/${category}/${id}`)
        console.log('Se envió el formulario')
    }

    return(
        <form onSubmit={handleSubmit}>
            <p>Search for:</p>
            <select
            name="category"
            onChange={handleCategory}
            
            >   
                <option value="">---</option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="films">Films</option>
                <option value="species">Species</option>
                <option value="vehicles">Vehicles</option>
                <option value="starships">Starships</option>
            </select>

            <label htmlFor="number">Id </label>
            <input
            type="text"
            id="id"
            name="id"
            value={id}
            onChange={handleId}
             />

            <input type="submit" value="Search"/>
            
        </form>
    );
}

export default Form;