import React, { useState, useRef, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom'
import { Modal, ModalBody, Form, Button, Alert } from 'react-bootstrap';
import axios from 'axios';
import dogpaw02 from '../img/dogpaw02.png'
import dogbone03 from '../img/dogbone03a.png'
import dog from '../img/dog.png'
import cat from '../img/cat.png'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../../components/header/Header';
// import { useDispatch, useSelector } from 'react-redux';
// import { authActions } from '../store';


export default function Home() {  
//   const dispatch = useDispatch();
//   const isLoggedIn = useSelector(state => state.isLoggedIn)

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    phoneNumber: ''
  })


//   const passwordRef = useRef()
//   const passwordConfirmRef = useRef()
//   const phoneNumberRef = useRef()


//   const handleChange = (e) => {
//     setInputs(prev => ({
//         ...prev,
//         [e.target.name]: e.target.value
//     }))
//   }

//   const [error, setError] = useState('')
//   const [loading, setLoading] = useState(false)
//   const navigate = useNavigate()  


//   const [showRegister, setShowRegister] = useState(false)
  
//   const handleCloseRegister = () => setShowRegister(false);
//   const handleShowRegister = () => setShowRegister(true);
  
//   const [showLogin, setShowLogin] = useState(false)
  
//   const handleCloseLogin = () => setShowLogin(false);
//   const handleShowLogin = () => setShowLogin(true);
  

//   const SwitchFromRegisterToLogin = () => {
//     handleShowLogin();
//     handleCloseRegister();
//   }
 
//   const SwitchFromLoginToRegister = () => {
//     handleCloseLogin();
//     handleShowRegister();
//   }

// const createUser = async () => {
//     const res = await axios.post('http://localhost:5000/api/signup/', {
//         name: {
//             firstName: inputs.firstName,
//             lastName: inputs.lastName
//         },
//         email: inputs.email,
//         password: inputs.password,
//         phoneNumber: inputs.phoneNumber
//     }).catch(err => console.log(err));
//     const data = await res.data;
//     return data;
// }


// const loginUser = async () => {
//     const res =  await axios.post('http://localhost:5000/api/login', {
//         email: inputs.email,
//         password: inputs.password
//     }).catch(err => console.log(err));
//     const data = await res.data;
//     console.log(data)
//     return data;
// }

// async function handleRegister(e) {
//     e.preventDefault();

//     if (passwordRef.current.value !==
//     passwordConfirmRef.current.value) {
//         return setError('Passwords do not match')
//     }

//     try {
//         createUser()
//         setError('')
//         handleCloseRegister()
//         handleShowLogin()
//     } catch {
//         setError('Failed to create an account')
//     }

// }

// async function handleLogin(e) {
//     e.preventDefault()

//     try {
//         setError('');
//         handleCloseLogin();
//         loginUser()
//             // .then(() => dispatch(authActions.login))
//             .then(() => navigate('/user'));
//     } catch {
//         setError('Failed to login')
//     }
// }

  return (
    <div>
        <Navbar/>
        <Header/>
        <div className='p-2' style={{margin: '50px 0 auto', textAlign: 'center', position:'absolute', width:'100vw'}}>  
                {/* <img src={dogpaw02} alt='dogpaw02' style={{maxWidth: '400px', position:'absolute'}}/>
            <button className='register-button' onClick={handleShowRegister}>
                <img src={dogbone03} className='dog-bone' style={{maxWidth: '380px', marginTop:'240px', marginLeft:'10px', position:'relative' }} />
            </button> */}

<p className='login-text mt-2'>Curious about our critters?</p>
            <table style={{minWidth: '300px', margin:'0 auto'}}>
                <tbody>
                <tr>
                <td></td>

                <td><img src={dog} alt='dog' style={{width:'50%'}} /></td>
                <div className='bone-wrapper'>
                <button 
                    className='bone' 
                    // onClick={handleContactLink} 
                >
                    <span>Contact Us!</span>
                </button>
            </div>
                <td><img src={cat} alt='cat'  style={{width: '50%'}} /></td>
                </tr>
                </tbody>
            </table>
            
        </div>

        {/* <Modal
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
        </Modal> */}
    </div>
 
  )
}
