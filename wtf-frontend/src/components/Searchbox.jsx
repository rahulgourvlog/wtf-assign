import React, { useEffect, useState } from 'react'
import { Button, Flex, Grid, Input } from '@chakra-ui/react'
import styled from 'styled-components';
import {GoSearch} from 'react-icons/go'
import {MdLocationPin} from 'react-icons/md'
import { useSelector } from 'react-redux';
const Search=styled.div`
width:80%;
margin: auto;
.main{
  display:flex;
  margin-top: 15px;
  border: 1.4px solid white;
  padding: 10px ;
  border-radius: 10px;

}
.input{
  background-color: black;
  width:80%;
  font-weight: 500;
  border:none;
  font-size: 18px;
  outline-width:0;
  color:white;
}
.input:hover{
  color:white;
  border:none;
  outline-width:0;
}
.sear{
  margin-top: 10px;
  margin-right: 15px;
}
.location{
  font-size: 30px;
  padding: 4px;
  border-radius: 5px;
  background-color:#920909 ;
}
.btn{
  border-radius: 5px;
  background-color: #920909;
  padding:0px 10px;
  font-size: 20px;
  margin-left: 10px;
  margin-bottom: 5px;
}

`


const Searchbox = () => {
  const [Input,Setinput]=useState("")
  const {Gym}=useSelector((state)=>state.reducer);
const handleclick=(e)=>{
e.preventDefault();

// Gym.filter((elem)=>{
//   console.log(elem)
//     // if(elem.gym_name==Input){
    
//     // }
    
//   })
}
//console.log(Gym)
console.log(Input)
useEffect(()=>{
  
},[])

  return (
    <>
    <Search>
      <form>
      <div className='main'>
    <GoSearch className='sear'/>
    <input className='input' value={Input} onChange={(e)=>Setinput(e.target.value)} placeholder='Search gym name here...'/>
    <button type="submit" onClick={handleclick}>click</button>
    <MdLocationPin className='location'/>
    <button className='btn'>Clear</button>
    </div>
    </form>
    </Search>
    
    
    </>
  )
}

export default Searchbox