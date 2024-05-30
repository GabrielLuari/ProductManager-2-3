import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Detail = (props) => {
    const [person, setPerson] = useState({})
    const {id} = useParams(); 
    const { people, setPeople } = props;
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + id)
            .then( res => {
                console.log(res.data);
                setPerson(res.data);
                
            })
            .catch( err => console.log(err) );
    }, [])
    
    const deletePerson = (personId) => {
        axios.delete(`http://localhost:8000/api/people/${personId}`)
            .then(res => {
                (personId);
                navigate("/");
     
            })
            .catch(err => console.log(err));
    }
    useEffect(() => {
        axios.get("http://localhost:8000/api/people")
            .then((res) => {
                console.log(res.data);
                setPeople(res.data);
              
            })
            .catch((err) => {
                console.log(err);
            });
        
    }, [setPeople]); 
   
    return (
        <div>
            <h1>Your List</h1>
            <p>title: {person.title}</p>
            <p>title: {person.title}</p>
            <p>description: {person.description}</p>
            <Link to={"/people/edit/" + person._id}>Edit</Link>
            <button onClick={(e)=>{deletePerson(person._id)}}> Delete</button>
        </div>
    );
}
export default Detail;

