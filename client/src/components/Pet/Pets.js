import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pet from './Pet';
import './Pet.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import Header from '../header/Header';

const URL = 'http://localhost:5000/api/pets/';

const fetchHandler = async () => {
        return await axios.get(URL)
        .then((res) => res.data);
};

const Pets = () => {
    const [pets, setPets] = useState();

    useEffect(() => {
        fetchHandler().then((data) => setPets(data.pets))
    }, [pets]);

    return (
        <div>
            <Navbar />
            <Header type='list' />
            <div className='d-flex ' style={{minHeight: '100px' ,width: '100vw', alignItems:'center', justifyContent: 'center'}}>
                <Link to='/'><Button className='btn btn-primary' style={{ width:'140px', maxHeight:'120px', minWidth:'90px', marginInline:'15px'  }}>Back</Button></Link>
                <Link to='/pets/add'><Button className='btn btn-primary' style={{ width:'140px', maxHeight:'120px', minWidth:'90px', marginInline:'15px'  }}>Add Pet</Button></Link>
            </div>
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