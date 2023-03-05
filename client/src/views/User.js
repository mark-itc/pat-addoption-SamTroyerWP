import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { MDBIcon, MDBInput, MDBInputGroup, MDBBtn} from 'mdb-react-ui-kit';
import Pets from '../components/Pet/Pets';

axios.defaults.withCredentials = true;
// let firstRender = true;

const User = () => {
    const [user, setUser] = useState('');

    // const refreshToken = async () => {
    //     const res = await axios.get('http://localhost:5000/api/refresh', {
    //         withCredentials: true
    //     }).catch(e => console.log(e));
    //     const data = await res.data;
    //     return data;
    // }


    // const sendRequest = async () => {
    //     const res = await axios.get('http://localhost:5000/api/user', {
    //     }).catch(e => console.log(e));
    //     const data = await res.data;
    //     console.log(data)
    //     return data;
    // }       



    const fetchHandler = async () => {
            await axios.get('http://localhost:5000/api/user/',
            )
            .then((res) => res.data);
    };
    
    useEffect(() => {
        fetchHandler().then((data) => setUser(data.user))
        console.log(user)
    }, [user]);

    // useEffect(() => {
    //     if(firstRender) {
    //         firstRender = false;
    //         sendRequest().then((data) => setUser(data.user));
    //     }
        // let interval = setInterval(() => {
        //     refreshToken().then(data => setUser(data))
        // }, 1000 * 28)

        // return () => clearInterval(interval)
    // }, [])
 
    // useEffect(() => async () => {
    //     const res = await axios.get('http://localhost:5000/api/user', {
    //     }).catch(e => console.log(e));
    //     const data = await res.data;
    //     console.log(data);
        
    //     if(data != null) {
    //     console.log(`${data.name} is currently logged in via ${data.email}`)}
    // }, [])

    return (
        <>
        {/* {data && <h1>Welcome back, {data.email}!</h1>} */}
            <div style={{overflow:'hidden'}}>
                <div className='d-flex ' style={{minHeight: '100px' ,width: '100vw', alignItems:'center', justifyContent: 'center'}}>
                    {/* <Tab LinkComponent={NavLink} to='/add' label='Add Pet' /> */}
                    {/* <Tab LinkComponent={NavLink} to='/pets' label='Pets' /> */}
                    <Link to={Pets}><Button className='btn btn-primary' style={{ marginLeft:'40px', alignContent:'flex-start', width:'150px', minWidth:'80px'}}>My Pets Page</Button></Link>
                    <Link to='/profile'><Button className='btn btn-primary' style={{ width:'140px', maxHeight:'120px', minWidth:'90px', marginInline:'15px'  }}>Profile</Button></Link>
                </div>
                <div className='mt-3'>
                    <MDBInputGroup style={{minWidth: '260px', justifyContent:'center'}}>
                        <MDBInput label='Search Pets Here' style={{width: '180px', minWidth: '80px'}}/>
                        <MDBBtn rippleColor='dark' >
                            <MDBIcon icon='paw' style={{alignContent:'center'}} />
                        </MDBBtn>
                    </MDBInputGroup>
                </div>
            </div>
        </>
    )
    }  

export default User
