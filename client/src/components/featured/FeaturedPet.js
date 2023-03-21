import React from 'react';
import { Button } from '@mui/material';
import './FeaturedPet.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';




const FeaturedPet = (props) => {
    const { _id, name, type, description, breed, height, weight, hypoallergenic, diet, image, createdAt } = props.pet;


  return (
    <div className='card'>
      <img src={image} alt={name} />
      <h1><strong>{name}</strong></h1>
      <h3>{type}</h3>
      <article><strong>Breed:</strong> {breed}</article>
      
      {/* <p><strong>Bio:</strong> {description}</p>
      <p><strong>Height:</strong> {height} cm</p>
      <p><strong>Weight:</strong> {weight} kg</p>
      <p><strong>Hypoallergenic:</strong> {hypoallergenic} </p>
      <p><strong>Dietary Needs:</strong> {diet} </p>
      <p><strong>Date Posted:</strong> {createdAt}</p> */}

      {/* <Button className='mt-3' LinkComponent={Link} to={`/pets/${_id}`}>Update</Button>
      <Button className='mt-3' onClick={deleteHandler}>Delete</Button> */}
    </div>
  )
}

export default FeaturedPet;