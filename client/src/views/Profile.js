import React, {useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Card, Button, Alert } from 'react-bootstrap'
import { UserAuth } from '../context/AuthContext'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'


export default function Profile() {

    const emailRef = useRef()
    const usernameRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { user, updateEmail, updatePassword, updateUsername } = UserAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [number, setNumber] = useState()

  
    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== 
            passwordConfirmRef.current.value) {
                return setError('Passwords do not match')
            }
  
        const promises = []
        setLoading(true)
        setError('')  
  
        if (emailRef.current.value !== user.email) {
            promises(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises(updatePassword(passwordRef.current.value))
        }
        if (usernameRef.current.value) {
            promises(updateUsername(usernameRef.current.value))
        }
  
        Promise.all(promises).then (() => {
            navigate('/')
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false)
        })
    }


  return (
    <>
      <Card style={{margin: '20px auto', width: '90vw', justifyContent: 'center'}}>
        <Card.Body>
            <h2 className='text-center mb-4'>Update Profile</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3' id='email'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' ref={emailRef} required defaultValue={user.email} />
                </Form.Group>
                <Form.Group className='mb-3' id='phone-number'>
                    <Form.Label>Phone Number</Form.Label>
                    <PhoneInput
                        placeholder="enter phone number"
                        value={number}
                        onChange={setNumber}
                        required
                    />
                </Form.Group>
                <Form.Group className='mb-3' id='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' ref={passwordRef} placeholder='Leave blank to keep the same'/>
                </Form.Group>
                <Form.Group className='mb-3' id='password-confirm'>
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control type='password' ref={passwordConfirmRef} placeholder='Leave blank to keep the same'/>
                </Form.Group>
                <div className='mt-4 d-flex justify-content-center'>
                    <Button type='submit' disabled={loading}>Update</Button>
                </div>
            </Form>
            
        </Card.Body>
      </Card>
      <div className='w-100 text-center mt-2'>
        <Link to='/'>Cancel</Link>
      </div>
    </>
  )
}

