import { Box, Button, FormLabel, TextField, FormControlLabel, Checkbox } from '@mui/material';
import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const AddPet = () => {
    const history = useNavigate()
    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        price: '',
        author: '',
        image: ''
    })

    const [checked, setChecked] = useState(false);

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
            // [e.target.author]: e.target.value,
            // [e.target.description]: e.target.value,
            // [e.target.price]: e.target.value,
            // [e.target.image]: e.target.value
        }))
    }

    const sendRequest = async () => {
        await axios.post("http://localhost:5000/pets", {
            name: String(inputs.name),
            type: String(inputs.type),
            description: String(inputs.description),
            breed: Number(inputs.breed),
            image: String(inputs.image),
            available: Boolean(checked)
        }).then(res => res.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs, checked)
        sendRequest().then(() => history('/pets'))
    }

  return (
    <form onSubmit={handleSubmit}>
        <Box sx={{
                display:'flex', 
                flexDirection:'column', 
                justifyContent:'center', 
                alignContent:'center', 
                alignSelf:'center', 
                marginLeft: 'auto', 
                marginRight: 'auto',
                marginTop: '20px',
                maxWidth: '700px'
        }}>
            <FormLabel>Name</FormLabel>
            <TextField value={inputs.name} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='name' />
            <FormLabel>Pet Type</FormLabel>
            <TextField value={inputs.author} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='author' />
            <FormLabel>Description</FormLabel>
            <TextField value={inputs.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description' />
            <FormLabel>Price</FormLabel>
            <TextField value={inputs.price} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='price' />
            <FormLabel>Image</FormLabel>
            <TextField value={inputs.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image' />
            <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Available" />
            <Button variant='contained' type='submit'>Add Pet</Button>
        </Box>
    </form>
  )
}

export default AddPet;