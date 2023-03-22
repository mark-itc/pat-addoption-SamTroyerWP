import React from 'react'
import './SearchItem.css'
import { Modal } from 'react-bootstrap';


const SearchItem = ({item}) => {

    // const { _id, name, type, description, breed, height, weight, hypoallergenic, diet, image, createdAt } = item.pet;


  return (
    <>
        {/* <div className='searchItem'>
            <img src={item.image} alt={name} />
            <h1><strong>{name}</strong></h1>
            <h3>{type}</h3>
            <article><strong>Breed:</strong> {breed}</article>
        </div> */}

        {/* {/* <Modal> */}
        <div className='searchItem'>
            //     <img 
                    src={item.image}
                    alt= {item.name}
                    className='siImg'
                />
            //     <div className='siDesc'>{item.description}</div>
            //     <div className='siDetails'></div>
            // </div>
        {/* </Modal> */} 
    </>
  )
}

export default SearchItem
