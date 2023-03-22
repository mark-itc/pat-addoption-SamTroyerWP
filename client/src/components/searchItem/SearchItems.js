import React, {useState, useEffect} from 'react'
import SearchItem from './SearchItem';
import './SearchItem.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const baseURL = 'http://localhost:5000/api/pets/';

const fetchHandler = async () => {
        return await axios.get(URL)
        .then((res) => res.data);
};


const SearchItems = () => {
  const [pets, setPets] = useState();
  const location = useLocation()

  const [petType, setPetType] = useState(location.state.petType)

    useEffect(() => {
        const getAllPets = async () => {
            try {
                const url = `${baseURL}?type=${petType}&name={$}`
            }catch (err) {
                console.log(err)
            }
        }
    })

    useEffect(() => {
        fetchHandler().then((data) => setPets(data.pets))
    }, [pets]);

 
  return (
    <div className='searchItem'>
        <ul>
          {pets &&
            pets.map((pet, i) => {
              return <li key={i}>
                  <SearchItem pet={pet} />
              </li>
          })}
        </ul>
    </div>
  )
}

export default SearchItems
