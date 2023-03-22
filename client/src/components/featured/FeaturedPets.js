import React, {useState, useEffect} from 'react'
import FeaturedPet from './FeaturedPet';
import './FeaturedPet.css';
import axios from 'axios';
// import useFetch from '../../hooks/useFetch';


const petsURL = `http://localhost:5000/api/pets/`;
// const userURL = `http://localhost:5000/api/users/6412c0eb697599e19cb1d587`;


const fetchPetsHandler = async () => {
    return await axios.get(petsURL)
    .then((res) => res.data);
};


// const fetchUserHandler = async () => {
//         return await axios.get(userURL)
//         .then((res) => res.data);
// };


const FeaturedPets = () => {

  const [pets, setPets] = useState();
  // const [user, setUser] = useState()



    useEffect(() => {
        fetchPetsHandler().then((data) => setPets((data.pets.slice(0,2))))
    }, [pets]);

  //   useEffect(() => {
  //     fetchUserHandler().then((data) => setUser(data.user))
  // }, [user]);

  // console.log(user)
 
  return (
    <div className='featured'>
      <h1 className='featuredHeader01'>Hello, !</h1>
      <h2 className='featuredHeader02'>Please check out some of our featured pets!</h2>
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
