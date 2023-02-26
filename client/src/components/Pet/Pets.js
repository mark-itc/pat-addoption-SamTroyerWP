import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pet from './Pet';
import './Pet.css'

const URL = 'http://localhost:5000/pets/';

const fetchHandler = async () => {
        return await axios.get(URL)
        .then((res) => res.data);
};

const Pets = () => {
    const [pets, setPets] = useState();

    useEffect(() => {
        fetchHandler().then((data) => setPets(data.pets))
    }, [pets]);

    console.log(pets)

    return (
        <div>
            <ul>
                {pets &&
                 pets.map((pet, i) => {
                    return <li key={i}>
                        <Pet pet={pet} />
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Pets;