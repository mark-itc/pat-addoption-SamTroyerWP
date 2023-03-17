import React, {useState, useRef} from 'react'
import './Navbar.css'
import dogpaw01 from '../img/dogpaw01.png'
import dogpaw02  from '../img/dogpaw02.png'
import dogbone03  from '../img/dogbone03a.png'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Modal, ModalBody, Form, Button, Alert } from 'react-bootstrap';



const Navbar = () => {
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
        const res = await axios.post('http://localhost:5000/api/auth/signup/', {
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
    
    
    const loginUser = async () => {
        const res =  await axios.post('http://localhost:5000/api/auth/login', {
            email: inputs.email,
            password: inputs.password
        }).catch(err => console.log(err));
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
            setError('');
            handleCloseLogin();
            loginUser()
                // .then(() => dispatch(authActions.login))
                .then(() => navigate('/pets'));
        } catch {
            setError('Failed to login')
        }
    }

  return (
    <div className='navbar'>
      <div className='navContainer'>
        <img src={dogpaw01} alt='dogpaw01' className='dogpaw01' />
        <span className='logo'>Welcome to Paws Pet Adoption!</span>
        <div className='navItems'>
            {/* <button className='navButton'>Register</button>
            <button className='navButton'>Login</button> */}

            <div className='registerContainer'>  
                <img src={dogpaw02} alt='dogpaw02' style={{maxWidth: '90px', position: 'absolute'}}/>
                <button className='register-button' onClick={handleShowRegister}>
                <img src={dogbone03} className='dog-bone' style={{maxWidth:'86px', marginLeft: '2px', marginTop: '54px' , position:'relative' }} />
            </button>
            </div>
        {/* <img src={dogpaw01} alt='dogpaw01' className='dogpaw01' style={{transform: 'scaleX(-1)'}} /> */}
        </div>

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

            
                    <div className='text-center m-3'>
                    Already a member? <button className='login-footer' onClick={SwitchFromRegisterToLogin}>Login!</button>
                    </div>
                </Form>
            </ModalBody>
        </Modal>

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
    </div>
  )
}

export default Navbar
