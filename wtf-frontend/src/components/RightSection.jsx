import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { RiStarSLine } from "react-icons/ri";
import { BsFillCursorFill } from "react-icons/bs";
import { Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/actions";
const Rightpart = styled.div`
  margin-top: 50px;
  margin-left: 20px;
  overflow-y: scroll;
  width: 70%;
 

  .card {
    width: 100%;
   
    height: 300px;
    display:flex;
    justify-content:space-between;
    align-items: flex-end;
    background-color: #2e2e2e;
    margin-bottom: 10px;
    border-radius: 10px;
  }
  .scrollable-element {
    scrollbar-color: red;
  }
  .star{
    display: flex;
   color:#920909;
   margin-bottom: 10px;
  }
  .duration{
    display: flex;
    margin-bottom: 10px;
  }
  .heading{
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 10px;

  }
  .card1{
    margin-bottom: 20px;
    margin-right: 15px;
    margin-left: 15px;
  }
  .fees{
    color:yellow;
  }
  .durrate{
    color:green;
  }
  .btn{
color:white;
background-color:#920909 ;
  }
`;
const RightSection = () => {
  const dispatch=useDispatch()
  // const [data, Setdata] = useState([]);
const {Gym,message}=useSelector((state)=>state.reducer);

console.log(Gym)
// Gym.filter((elem)=>{
//   console.log(elem.gym_name)
// })
  useEffect(() => {
   dispatch(getData())
  }, []);

  return (
    <>
      <Rightpart>
       { message.length==0 ? 
        Gym.map((elem,index) => {
          return (
            <div key={index} className="card">
              <div className="card1">
                <h2 className="heading">{elem.gym_name}</h2>
                <p>
                  {elem.address}
                  {elem.address2}
                </p>
                <h3 className="fees">₹ 3000 for 3 months</h3>
              </div>
              <div className="card1">
              <div className="star">
                <RiStarSLine /> <RiStarSLine /> <RiStarSLine /> <RiStarSLine />{" "}
                <RiStarSLine />
                </div>
                <div className="duration">
                  <p> <BsFillCursorFill className="durrate"/></p>
                <p>
                {elem.duration_text} away | 
                </p>
                  <p> {elem.distance_text}</p>
                </div>
                
                <Button className="btn">Book now</Button>
              </div>
            </div>
          )}):<div>{message.message}</div>}
      </Rightpart>
    </>
  );
};

export default RightSection;

// addon_front: null
// addons: []
// address1: "Sector 8"
// address2: "C Block"
// benefits: []
// category_id: "8oTG3rOtE5BAW"
// category_name: "Elite"
// city: "Noida"
// country: "India"
// cover_image: null
// description: "Naresh Sir Gym"
// distance: "203.06"
// distance_text: "203.06 km"
// duration: "304.59"
// duration_text: "304.59 minutes"
// free_trial: 0
// gallery: []
// gym_name: "WTF: Naresh Sir Gym"
// is_cash: 0
// is_partial: "0"
// latitude: "28.5966034"
// longitude: "77.3286464"
// name: "Dev Testing"
// offer: []
// pin: "201301"
// plan_description: null
// plan_duration: null
// plan_name: null
// plan_price: null
// rating: 4.2
// slug: "WTF-Naresh-Sir-Gym"
// state: "Uttar Pradesh"
// status: "active"
// text1: null
// text2: null
// total_rating: 13
// type: "gym"
// user_id: "FVWxjQktVztQm"
// wtf_share: null
