import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PetSearchList.css'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Navbar from '../Navbar/Navbar';
import Header from '../header/Header';

const PetSearchList = () => {
    
    return (
        <div>
            <Navbar />
            <Header type='list' />
            <div className='listContainer'>
                <div className='listWrapper'>
                    <div className='listSearch'>
                        <h1 className='lsTitle'>Search</h1>
                        <div className='listResult'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PetSearchList;