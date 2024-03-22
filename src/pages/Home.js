import React from 'react'
import Navbar from '../components/navbar'
import './home.css'


const Home = () => {
  return (
    
    <>
        <Navbar/>
        <div className='container1' >
        
          <div className='box1 '>
           <p className='para1'> Front-End React Developer</p>
           
           <p className='para2'>Hi, i'm Devraj R. A Passoniate Front-End Developer based in Chennai</p>
          </div>
           
           <div className='box2 '>
           <div className='border'>
            
          </div>
           <img src='images/img2.jpg'></img>
           </div>
           
        </div>
        
        <a className='resume' href='' download='newfront2.pdf'> down</a>
        
    </>
  )
}

export default Home