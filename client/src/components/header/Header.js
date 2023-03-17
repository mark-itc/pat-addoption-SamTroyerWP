import React from 'react'
import "./Header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faDog, faCat, faUser, faMagnifyingGlass, faKey, faMouse, faPaw} from '@fortawesome/free-solid-svg-icons'


const Header = ({ type }) => {
  return (
    <div className='header'>
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer" }>
        <div className='headerList'>
            <div className='headerListItem active'>
                <FontAwesomeIcon icon={faDog} />
                <span>Pets</span>
            </div>
            <div className='headerListItem'>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <span>Search</span>
            </div>
            <div className='headerListItem'>
                <FontAwesomeIcon icon={faUser} />
                <span>Profile</span>
            </div>
            <div className='headerListItem'>
                <FontAwesomeIcon icon={faKey} />
                <span>Login</span>
            </div>
        </div>

        { type !== "list" &&
            <>
                <h1 className='headerTitle'>Looking for a furry companion?  You've come to the right place!
                </h1>
                <p className='headerDesc'>Here at Paws, we value relationships above all else.  Whether you are looking to adopt or foster, we are with you every step of the way!
                </p>
                <div className='headerSearchContainer'>
                    <h2>Quick Adoption Search</h2>
                    <div className='headerSearch'>
                        <div className='headerSearchItem'>
                            <FontAwesomeIcon icon={faCat} className='headerIcon' />
                            <input 
                                type='text' 
                                placeholder='Type of Pet'
                                className='headerSearchInput'
                            />
                        </div>
                        <div className='headerSearchItem'>
                            <FontAwesomeIcon icon={faDog} className='headerIcon' />
                            <input 
                                type='text' 
                                placeholder='Size of Pet'
                                className='headerSearchInput'
                            />
                        </div>
                            {/* <label for="pets" className='petsDropDown'>Choose a type: </label>

                            <select name="pets" id="pets" className='petsOptions'>
                                <option value="dog">Dog</option>
                                <option value="cat">Cat</option>
                                <option value="rabbit">Rabbit</option>
                                <option value="other">Other</option>
                            </select>  */}
                        
                        <div className='headerSearchItem'>
                            <button className='headerBtn'>Search</button>
                        
                        </div>  
                    </div>
                </div>
            </>
        }
      </div>
    </div>
  )
}

export default Header
