import { Select } from '@chakra-ui/react'
import React from 'react'
import { GoSearch } from 'react-icons/go'
import { MdLocationPin } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { filterbycity } from '../Redux/actions'
const Search=styled.div`
width:60%;

.main{
  display:flex;
  margin-top: 15px;
  border: 1.4px solid #a9a6a6;
  padding: 10px ;
  border-radius: 5px;
background-color: #2e2e2e;
margin-bottom: 30px;
}
.input{
 
background-color:#2e2e2e ;
  width:80%;
  font-weight: 500;
  border:none;
  font-size: 18px;
  outline-width:0;
  color:#a9a6a6;
}
.input:hover{
  /* color:white;
  border:none; */
  outline-width:0;
}
.sear{
  color:#a9a6a6;
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
const LeftSide =styled.div`
margin-top: 50px;
width:30%;



.heading{
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: 400;
}
.subheading{
font-size: 20px;
font-weight: 400;
margin-top: 15px;
margin-bottom: 20px;
}
.inputbox  {
border-radius: 5px;
background-color:#2e2e2e ;
width:20%;
padding: 10px;
font-weight: 500;
border:none;
font-size: 18px;
outline-width:0;
color:#a9a6a6;
border: 1.4px solid #a9a6a6;
text-align: center;
}
.inputbox1  {
border-radius: 5px;
background-color:#2e2e2e ;
width:20%;
padding: 10px;
font-weight: 500;
border:none;
font-size: 18px;
outline-width:0;
color:#a9a6a6;
border: 1.4px solid #a9a6a6;
text-align: center;
margin-left: 10px;
}
.price{

display: flex;


}
.select{
border-radius: 2px;
background-color:#2e2e2e ;
width:70%;
padding: 12px 5px;
border: 1.4px solid #a9a6a6;
}

.select:hover{

background-color:#2e2e2e !important;
}
.select{


option{
padding: 12px 5px;
}
} 

`

const LeftSection = () => {
  const dispatch=useDispatch()
  const filteritems = (e) => {

  //   let type=""
  //  if(=="New Delhi"){
  //   type=NewDelhi
  //  }
  //  else {
  //    type=FEMALE
  //  }
   dispatch(filterbycity(e.target.value))
   
  };
  return (
  <>
  <LeftSide>
<div className='heading'>
 <h2>Filters</h2> 
  </div>
<div>
<div >
  
  <h5 className='subheading'>Location</h5>
 

<Search>
      <div className='main'>
    <GoSearch className='sear'/>
    <input className='input' placeholder='Enter Location'/>
   
    </div>
    </Search>

</div>
</div>
<div>

<h5 className='subheading'>Price</h5>
<div className='price'>
<input className='inputbox' placeholder='Min'/>
<input className='inputbox1' placeholder='Max'/>
</div>
</div>
<div>
  <h5 className='subheading'>Cities</h5>
  <select className='select' onChange={filteritems}>
    <option value="New Delhi">New Delhi</option>
    <option value="Ghaziabad">Ghaziabad</option>
    <option value="Greater Noida">Greater Noida</option>
    <option value="Noida">Noida</option>
    <option value="Delhi">Delhi</option>
  </select>
</div>

  </LeftSide>
  </>
  )
}

export default LeftSection