import React, {useState, useEffect} from 'react'
import FeaturedPet from './FeaturedPet';
import './FeaturedPet.css';
import axios from 'axios';


const URL = 'http://localhost:5000/api/pets/';

const fetchHandler = async () => {
        return await axios.get(URL)
        .then((res) => res.data);
};


const FeaturedPets = () => {
  const [pets, setPets] = useState();

    useEffect(() => {
        fetchHandler().then((data) => setPets(data.pets))
    }, [pets]);

 
  return (
    <div className='featured'>
        <ul>
          {pets &&
            pets.map((pet, i) => {
              return <li key={i}>
                  <FeaturedPet pet={pet} />
              </li>
          })}
        </ul>
    </div>
  )
}

export default FeaturedPets
