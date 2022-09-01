import React from 'react'
import Searchbox from './Searchbox';
import styled from "styled-components"
import LeftSection from './LeftSection';
import RightSection from './RightSection';
const Wrapper=styled.div`
background-color: black;
height: 700px;

color:white;

.top_down{
 display: flex;
  width:90%;
  margin: auto;
 
  height: 600px;
}


`

const MiddleSection = () => {
  return (
    <>
   <Wrapper>
   <Searchbox/>
<div className='top_down'>
  <LeftSection/>
  <RightSection/>
</div>
   </Wrapper>
   
  
  
    
    </>
  )
}

export default MiddleSection