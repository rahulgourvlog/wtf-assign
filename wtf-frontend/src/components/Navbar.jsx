import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import styled from "styled-components";
import {FaUserCircle} from 'react-icons/fa'
import { Button } from '@chakra-ui/react';
const Navbar = () => {
  
const Nav=styled.div`

display: flex;
background-color:black;
align-items: center;
width:100%;
height: 50px;
color:white;
align-items: center;
justify-content: space-around;
position: fixed;
z-index: 5;


.btn{
color:white;
background-color:#920909 ;
  }


.link{
font-size: 20px;

list-style: none;
text-decoration: none;
}
.link:hover{
    color:#dc3646;
}


`


  return (
  <>
  <Nav>
 
<li className='link'>Fitness</li>
<li className='link'>Nutrition</li>
<li className='link'>Gyms</li>
<li className='link'>Become WTF Partner</li>
<li className='link'>About us</li>
<li className='link'><Button className='btn' >Login</Button></li>

  
  
  </Nav>
 
  </>
  )
}

export default Navbar
