import { Box, FormLabel, TextField, FormControlLabel, Checkbox } from '@mui/material';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';



const AddPet = () => {

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     axios.get('http://localhost:5000/uploads')
    //     .then((res) => setData(res.data))
    //     .catch((err) => console.log(err, 'there was an error'))
    // }, [])

    const history = useNavigate()
    const [inputs, setInputs] = useState({
        name: '',
        description: '',
        breed: '',
        type: '',
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
        await axios.post("http://localhost:5000/pets/add", {
            name: String(inputs.name),
            type: String(inputs.type),
            description: String(inputs.description),
            breed: String(inputs.breed),
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
      <>
        <div className='d-flex ' style={{minHeight: '100px' ,width: '100vw', alignItems:'center', justifyContent: 'center'}}>
                    <Link to='/user'><Button className='btn btn-primary' style={{ width:'140px', maxHeight:'120px', minWidth:'90px', marginInline:'15px'  }}>Back</Button></Link>
                </div>
        <form onSubmit={handleSubmit}>
            <Box sx={{
                    display:'flex',
                    padding: '20px',
                    flexDirection:'column', 
                    justifyContent:'center', 
                    alignContent:'center', 
                    alignSelf:'center', 
                    marginLeft: 'auto', 
                    marginRight: 'auto',
                    marginTop: '20px',
                    minWidth: '400px',
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
                <FormLabel>Image</FormLabel>
                <TextField value={inputs.image} onChange={handleChange} margin='normal' fullWidth variant='outlined' name='image' />
                    {/* {
                        data.map((singleData) => {
                            const base64String = btoa(
                                String.fromCharCode(...new Uint8Array((singleData.image.data.data)))
                            );
                            return <img src={`data:image/png; base64, ${base64String}`} alt="" />
                        })
                    } */}
                <FormControlLabel control={<Checkbox checked={checked} onChange={() => setChecked(!checked)} />} label="Available" />
                <Button variant='contained' className='btn btn-primary mt-3' type='submit'>Add Pet</Button>
            </Box>
        </form>
      </>
  )
}
export default AddPet;