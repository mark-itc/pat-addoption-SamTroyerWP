import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/header/Header';
import FeaturedPets from '../../components/featured/FeaturedPets';
import dog from '../img/dog.png'
import cat from '../img/cat.png'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../../components/footer/Footer';
import axios from 'axios';


export default function Home() {  
    
 

  return (
    <div>
        <Navbar/>
        <Header/>
        <div className='homeContainer'>
            <FeaturedPets/>
        </div>
        <div 
            className='p-2' 
            style={{
                margin: '50px 0 auto', 
                textAlign: 'center', 
                position:'absolute', 
                width:'100vw'
            }}
        >  
            <table style={{minWidth: '300px', margin:'0 auto'}}>
                <tbody>
                    <tr>
                        <td>
                            <img src={dog} alt='dog' style={{width:'50%'}} />
                        </td>
                        <p className='login-text mt-2'>Curious about our critters?</p>
                        <div className='bone-wrapper'>
                            <button 
                            className='bone' 
                            // onClick={handleContactLink} 
                        >
                                <span>Contact Us!</span>
                            </button>
                        </div>
                        <td>
                            <img src={cat} alt='cat'  style={{width: '50%'}} />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        {/* <Footer /> */}
    </div>
 
  )
}
