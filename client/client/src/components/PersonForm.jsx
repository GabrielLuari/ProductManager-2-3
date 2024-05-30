import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,} from 'react-router-dom';

const PersonForm = () => {
  
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();
       
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        
       
        axios.post('http://localhost:8000/api/people', {
            title,   
            price,
            description
        })
            .then(res => {
                console.log(res); 
                console.log(res.data);
                navigate(0);
            })
            .catch(err => console.log(err));
        
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <h1>Product Manager</h1>
            <p>
                <label>Title</label><br/>
                <input 
                    type="text" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                />
            </p>
            <p>
                <label>Price</label><br/>
                <input 
                    type="text" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)} 
                />
            </p>
            <p>
                <label>Description</label><br/>
                <input 
                    type="text" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                />
            </p>
            <input type="submit" value="create" />
        </form>
    );
}

export default PersonForm;