import React from 'react'
import { Navbar, Button} from 'react-bootstrap'
import dogpaw01 from '../views/img/dogpaw01.png'



function Dashboard() {

  

  return (
    <Navbar id='mainNav' className='navbar navbar-dark bg-dark p-3' style={{borderTop: '.25px solid', borderBottom: '.25px solid', justifyContent: 'space-between', width: '100vw', overflow:'hidden'}}>
        <img src={dogpaw01} alt='dogpaw' style={{maxWidth: '20px', maxHeight: '100px', minWidth: '100px'}} />
        <div className='navbar-brand d-flex m-1 justify-content-center' style={{whiteSpace: 'initial', minWidth:'100px', textAlign:'center', fontSize:'20px'}}>
    
            <span style={{marginBottom: '5px',fontFamily: 'Verdana', maxHeight: '80px', fontSize: '3.5vw'}}>Welcome to Paws' Pet Adoption!</span>
            
        </div>
        
        {/* <div className='d-flex justify-content-end'>
            <Button type='submit' className='btn btn-primary btn-xl text-uppercase'>Login</Button>
        </div> */}
        <img src={dogpaw01} alt='dogpaw' style={{maxWidth: '20px', maxHeight: '100px', minWidth: '100px', transform: 'scaleX(-1)'}} />
    </Navbar>
  )
}

export default Dashboard
