import React, {useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import axios from 'axios';


export default function Profile() {

    const [inputs, setInputs] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        passwordConfirm: '',
        phoneNumber: ''
      })
      
    const emailRef = useRef()
    const phoneNumberRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
  
    const handleChange = (e) => {
        setInputs(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
      }

    const updateProfile = async () => {  
        const res = await axios.put('http://localhost:5000/api/user/', {
            name: {
                firstName: inputs.firstName,
                lastName: inputs.lastName
            },
            email: inputs.email,
            password: inputs.password,
            phoneNumber: inputs.phoneNumber
        }).catch(err => console.log(err));
        const data = await res.data;
        return data;
}

async function handleUpdate(e) {
    e.preventDefault();

    if (passwordRef.current.value !==
    passwordConfirmRef.current.value) {
        return setError('Passwords do not match')
    }

    try {
        updateProfile()
        setError('')
        setLoading(true)
        navigate('/user')
        alert('Updated Profile Successfully')
    } catch {
        setError('Failed to update profile')
    }

}


  return (
    <>
      <Card style={{margin: '20px auto', width: '90vw', justifyContent: 'center'}}>
        <Card.Body>
            <h1 className='text-center mb-4'>Update Profile</h1>
            <p className='mb-4'>Leave fields blank to keep them the same</p>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleUpdate}>
                <Form.Group className='mb-3' id='email'>
                    <Form.Label><strong>Email</strong></Form.Label>
                    <Form.Control type='email' onChange={handleChange} ref={emailRef} placeholder={'Enter Email'} required />
                </Form.Group>
                {/* <Form.Group className='mb-3' id='first-name'>
                    <Form.Label><strong>First Name</strong></Form.Label>
                    <Form.Control type='text' onChange={handleChange} ref={emailRef} placeholder='Enter First Name' required />
                </Form.Group>
                <Form.Group className='mb-3' id='last-name'>
                    <Form.Label><strong>Last Name</strong></Form.Label>
                    <Form.Control type='text' onChange={handleChange} ref={emailRef} placeholder='Enter Last Name' required />
                </Form.Group> */}
                <Form.Group className='mb-3' id='phone-number'>
                    <Form.Label><strong>Phone Number</strong></Form.Label>
                    <Form.Control
                        placeholder="Enter Phone Number"
                        onChange={handleChange}
                        ref={phoneNumberRef}
                        minLength={10} 
                        maxLength={10}
                        required
                    />
                </Form.Group>
                <Form.Group className='mb-3' id='password'>
                    <Form.Label><strong>Password</strong></Form.Label>
                    <Form.Control type='password' onChange={handleChange} ref={passwordRef} placeholder='Enter Password'/>
                </Form.Group>
                <Form.Group className='mb-3' id='password-confirm'>
                    <Form.Label><strong>Password Confirmation</strong></Form.Label>
                    <Form.Control type='password' onChange={handleChange} ref={passwordConfirmRef} placeholder='Enter Password Again'/>
                </Form.Group>
                <div className='mt-5 d-flex justify-content-center'>
                    <Button type='submit' disabled={loading}>Update</Button>
                </div>
            </Form>
            <div className='w-100 text-center mt-5'>
                <Link to='/user'>Cancel</Link>
            </div>
        </Card.Body>
      </Card>
      
    </>
  )
}

