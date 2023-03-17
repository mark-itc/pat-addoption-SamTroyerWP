import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, FormLabel, TextField, FormControlLabel, Checkbox } from '@mui/material';


const PetDetail = () => {
    const [inputs, setInputs] = useState({});
    const [checked, setChecked] = useState(false);
    const history = useNavigate();

    const id = useParams().id;

    useEffect(() => {
        const fetchHandler = async () => {
            await axios
                .get(`http://localhost:5000/api/pets/${id}`)
                .then(res => res.data)
                .then(data => setInputs(data.pet));
        };
        fetchHandler();
    }, [id])


    const sendRequest = async () => {
        await axios.put(`http://localhost:5000/api/pets/${id}`, {
            name: String(inputs.name),
            type: String(inputs.type),
            description: String(inputs.description),
            breed: String(inputs.breed),
            height: Number(inputs.height),
            weight: Number(inputs.weight),
            hypoallergenic: Boolean(inputs.hypoallergenic),
            diet: String(inputs.diet),
            image: String(inputs.image),
            available: Boolean(checked)
        }).then(res => res.data)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(() => history('/pets'))
    }

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

    return (
        <div>
            { inputs &&    
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
                        <TextField value={inputs.type} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='type' />
                        <FormLabel>Description</FormLabel>
                        <TextField value={inputs.description} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='description' />
                        <FormLabel>Breed</FormLabel>
                        <TextField value={inputs.breed} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='breed' />
                        <FormLabel>Height</FormLabel>
                        <TextField value={inputs.height} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='height' />
                        <FormLabel>Weight</FormLabel>
                        <TextField value={inputs.weight} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='weight' />
                        <FormLabel>Color</FormLabel>
                        <TextField value={inputs.color} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='color' />
                        <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="hypoallergenic">
                            Hypoallergenic
                        </FormControlLabel>
                        <FormLabel>Dietary Needs</FormLabel>
                        <TextField value={inputs.diet} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='diet' />

                        <FormLabel>Image</FormLabel>
                        <TextField value={inputs.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image' />
                        <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Available" />
                        <Button variant='contained' type='submit'>Update Pet</Button>
                    </Box>
                </form>
            }
        </div>
  )
}

export default PetDetail
