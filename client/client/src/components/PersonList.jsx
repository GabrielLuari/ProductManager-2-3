import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PersonList = (props) => {
    
    const {removeFromDom, people, setPeople } = props;
   
    
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
    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/people/' + personId)
            .then(res => {
                removeFromDom(personId);
            })
            .catch(err => console.log(err));
    };
    
    
    return (
        
        <div>
            { props.people.length > 0 ? <h2>All Products:</h2>: <h2>Please add a product</h2>}
            {
                props.people.map((person) => {
                    return (
                        <div  key={person._id}> 
                            <p >{person.title}</p> 
                            <p>{person.price}</p>
                            <p>{person.description}</p>
                            <Link to={`/people/${person._id}`}> {person.title} Enter to  List </Link>
                            <Link to={"/people/edit/" + person._id}>Edit</Link>
                            <button onClick={(e)=>{deletePerson(person._id)}}> Delete</button>
                        </div> 
                    );
                })
            }
        </div>
    );
};

export default PersonList;
