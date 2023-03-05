import React, { useState, useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Modal, ModalBody, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import dogpaw02 from './img/dogpaw02.png'
import dogbone03 from './img/dogbone03a.png'
import dog from './img/dog.png'
import cat from './img/cat.png'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux';


export default function Home() {  
 
  const isLoggedIn = useSelector(state => state.isLoggedIn)

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phoneNumber: ''
  })


  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const phoneNumberRef = useRef()


  const handleChange = (e) => {
    setInputs(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }))
  }

  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()  


  const [showRegister, setShowRegister] = useState(false)
  
  const handleCloseRegister = () => setShowRegister(false);
  const handleShowRegister = () => setShowRegister(true);
  
  const [showLogin, setShowLogin] = useState(false)
  
  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);
  

  const SwitchFromRegisterToLogin = () => {
    handleShowLogin();
    handleCloseRegister();
  }
 
  const SwitchFromLoginToRegister = () => {
    handleCloseLogin();
    handleShowRegister();
  }

const createUser = async () => {
    const res = await axios.post('http://localhost:6000/api/signup', {
        name: {
            firstName: inputs.firstName,
            lastName: inputs.lastName
        },
        email: inputs.email,
        password: inputs.password,
        phoneNumber: inputs.phoneNumber
    }).catch(e => console.log(e));
    const data = await res.data;
    return data;
}


const loginUser = async () => {
    const res = await axios.post('http://localhost:6000/api/login', {
        email: inputs.email,
        password: inputs.password,
    }).catch(e => console.log(e));
    const data = await res.data;
    console.log(data)
    return data;
}

async function handleRegister(e) {
    e.preventDefault();

    if (passwordRef.current.value !==
    passwordConfirmRef.current.value) {
        return setError('Passwords do not match')
    }

    try {
        createUser()
        setError('')
        handleCloseRegister()
        handleShowLogin()
    } catch {
        setError('Failed to create an account')
    }

}

async function handleLogin(e) {
    e.preventDefault()

    try {
        setError('')
        handleCloseLogin()
        loginUser().then(() => navigate('/user'));
    } catch {
        setError('Failed to login')
    }
}

  return (
    <div>
        <div className='p-2' style={{margin: '50px 0 auto', textAlign: 'center', position:'absolute', width:'100vw'}}>  
                <img src={dogpaw02} alt='dogpaw02' style={{maxWidth: '400px', position:'absolute'}}/>
            <button className='register-button' onClick={handleShowRegister}>
                <img src={dogbone03} className='dog-bone' style={{maxWidth: '380px', marginTop:'240px', marginLeft:'10px', position:'relative' }} />
            </button>

        <Modal 
            className='register-modal' 
            show={showRegister}
            onHide={handleCloseRegister}
        >
            <ModalBody>
                <button className='btn-close btn-close-black' onClick={handleCloseRegister} />
                <h2 className='text-center mb-4'>Sign Up</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleRegister}>
                    <Form.Group className='mb-1' id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name='email' onChange={handleChange} type='email' value={inputs.email} placeholder='Enter email address' required />
                    </Form.Group>
                    <Form.Group className='mb-1' id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' ref={passwordRef} onChange={handleChange} type='password' value={inputs.password} placeholder='Enter password' required />
                    </Form.Group>
                    <Form.Group className='mb-1' id='password-confirm'>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control name='passwordConfirm' ref={passwordConfirmRef} onChange={handleChange} type='password' value={inputs.passwordConfirm} placeholder='Enter password again' required />
                    </Form.Group>
                    <Form.Group className='mb-1' id='firstname'>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control name='firstName' onChange={handleChange} value={inputs.firstName} placeholder='Enter first name' required />
                    </Form.Group>
                    <Form.Group className='mb-1' id='lastname'>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control name='lastName' onChange={handleChange} value={inputs.lastName} placeholder='Enter last name' required />
                    </Form.Group>
                    <Form.Group className='mb-1 phone-number' id='phone-number'>
                        <Form.Label>Phone Number</Form.Label>   
                        <Form.Control name='phoneNumber' ref={phoneNumberRef} onChange={handleChange} value={inputs.phoneNumber} minLength={10} maxLength={10} placeholder='enter 10 digit phone number'  required />
                    </Form.Group>
                    
                    <div className='mt-2 d-flex justify-content-center'>
                        <Button 
                            type='submit' 
                            disabled={loading}
                        >
                            Register
                        </Button>
                    </div>
                    <div className="or-container text-center">
                        <div className="line-separator"></div> 
                        <div className="or-label">or</div>
                        <div className="line-separator"></div>
                    </div>

                    {/* <div className='m-3 d-flex justify-content-center btn-block text-uppercase btn-outline'>
                        <button className="register_btn btn-google p-3" >
                            <img className='p-1' src="https://img.icons8.com/color/16/000000/google-logo.png" alt='google-icon' /> 
                            Login with Google
                        </button>
                    </div> */}
                    <div className='text-center m-3'>
                    Already a member? <button className='login-footer' onClick={SwitchFromRegisterToLogin}>Login!</button>
                    </div>
                </Form>
            </ModalBody>
        </Modal>

            <table style={{minWidth: '300px', margin:'0 auto'}}>
                <tbody>
                <tr>
                <td><img src={dog} alt='dog' style={{width:'80%'}} /></td>

                <td><p className='login-text mt-5'> Already part of our family?</p></td>
                <td><img src={cat} alt='cat'  style={{width: '80%'}} /></td>
                </tr>
                </tbody>
            </table>
            <div className='bone-wrapper'>
                <button className='bone' onClick={handleShowLogin} >
                    <span>Login!</span>
                </button>
            </div>
        </div>

        <Modal
            className='login-modal' 
            show={showLogin}
            onHide={handleCloseLogin}
        >
            <ModalBody>
                <button className='btn-close btn-close-black' onClick={handleCloseLogin} />
                <h2 className='text-center mb-4'>Log In</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleLogin}>
                    <Form.Group className='mb-3' id='email'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control name='email' onChange={handleChange} type='email' value={inputs.email} placeholder='Enter email address' required />
                    </Form.Group>
                    <Form.Group className='mb-4' id='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' onChange={handleChange} type='password' value={inputs.password} placeholder='Enter password' required  />
                    </Form.Group>
                    <div className='m-3 d-flex justify-content-center'>
                    <Button type='submit' disabled={loading}>
                        Login
                    </Button>
                    </div>
                    <div className="or-container text-center">
                    <div className="line-separator"></div> 
                    <div className="or-label">or</div>
                    <div className="line-separator"></div>
                    </div>

                    {/* <div className='m-3 d-flex justify-content-center btn-block text-uppercase btn-outline'>
                    <button className="register_btn btn-google p-3">
                        <img className='p-1' src="https://img.icons8.com/color/16/000000/google-logo.png"/> 
                        Login with Google
                    </button>
                    </div> */}
                    <div className='text-center'>
                    <Link className='forgot-password' to='/forgot-password'>Forgot Password?</Link>
                    </div>

                    <div className='text-center m-3'>
                        Don't have an account? <button className='signup-footer' onClick={SwitchFromLoginToRegister}>Sign up!</button>
                    </div>
                </Form>
            </ModalBody>
        </Modal>
    </div>
 
  )
}
