import React from 'react';
import { Button } from '@mui/material';
import './Pet.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Pet = (props) => {
    const history = useNavigate();
    const { _id, name, type, description, breed, image } = props.pet;

    const deleteHandler = async () => {
      await axios
        .delete(`http://localhost:5000/pets/${_id}`)
        .then((res) => res.data)
        .then(() => history('/pets'))
    }

  return (
    <div className='card'>
      <img src={image} alt={name} />
      <article><p>pet type:</p> {type}</article>
      <h2>{name}</h2>
      <p>{description}</p>
      <h1>${breed}</h1>
      <Button LinkComponent={Link} to={`/pets/${_id}`}>Update</Button>
      <Button onClick={deleteHandler}>Delete</Button>
    </div>
  )
}

export default Pet;