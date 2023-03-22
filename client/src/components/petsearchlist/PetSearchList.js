import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PetSearchList.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import Header from '../header/Header';
import SearchItem from '../searchItem/SearchItem';
import useFetch from '../../hooks/useFetch';

const PetSearchList = () => {
    
    const location = useLocation()

    const [petType, setPetType] = useState(location.state.petType)
    const [type, setType] = useState('')
    const [name, setName] = useState('')
    const [status, setStatus] = useState()
    const [minHeight, setMinHeight] = useState()
    const [maxHeight, setMaxHeight] = useState()
    const [minWeight, setMinWeight] = useState()
    const [maxWeight, setMaxWeight] = useState()

    const {
        loading, 
        error, 
        data,
        reFetch
        } = useFetch(`/pets/search?type=${type}&name=${name}&status=${status}&minHeight=${minHeight || 0 }&maxHeight=${maxHeight || 999}&minWeight=${minWeight || 0 }&maxWeight=${maxWeight || 999}`)
        // &height=${height}&weight=${weight}`)

    
    
    
    const onChangeNumbers = (e) => {
        const regExp = /^[0-9\b]+$/;
        if (e.target.value === '' || regExp.test(e.target.value)) {
            setMinHeight(e.target.value)
            setMaxHeight(e.target.value)
            setMinWeight(e.target.value)
            setMaxWeight(e.target.value)
        }
    }

    const handleType = (e) => {
        setType(e.target.value)
    }
    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleStatus = (e) => {
        setStatus(e.target.value)
    }


    const handleSubmit = () => {
        reFetch()
    }

    useEffect(() => {
        const fetchPets = async () => {
            const res = await axios.get(`http://localhost:5000?type=${type}&name=${name}&status=${status}`)
            // &height=${height}&weight=${weight}`)
        }
    })

    return (
        <div>
            <Navbar />
            <Header type='list' />
            <div className='listContainer'>
                <div className='listWrapper'>
                    <div className='listSearch'>
                        <h1 className='lsTitle'>Advanced Search</h1>
                        <div className='lsItem'>
                            <label>Type: </label>
                            <input className='searchInput' type='text' onChange={handleType} />
                        </div>
                        <div className='lsItem'>
                            <label>Name: </label>
                            <input className='searchInput' type='text'  onChange={handleName} />
                        </div>
                        <div className='lsItem'>
                            <label>Adoption Status: </label>
                            <select className='searchSelect' type='text' onChange={handleStatus}>
                                <option value='available'>Available</option>
                                <option value='fostered'>Fostered</option>
                                <option value='adopted'>Adopted</option>
                            </select>

                        </div>
                        <div className='lsItemNum'>
                            <label className='heightweight'>Height: </label>
                            <input className='searchInputNum' type='number' placeholder='Min'  onChange={(e) => setMinHeight(e.target.value)} />
                            <input className='searchInputNum' type='number' placeholder='Max'  onChange={(e) => setMaxHeight(e.target.value)} />
                        </div>
                        <div className='lsItemNum'>
                            <label className='heightweight'>Weight: </label>
                            <input className='searchInputNum' type='number' placeholder='Min'  onChange={(e) => setMinWeight(e.target.value)} />
                            <input className='searchInputNum' type='number' placeholder='Max'   onChange={onChangeNumbers} />
                        </div>
                        <button type='submit' onClick={handleSubmit} className='searchBtn'>Search</button>
                    </div>
                    <div className='listResult'>
                        
                        {data.map(item => (
                            <SearchItem item={item} key={item._id} />
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetSearchList;