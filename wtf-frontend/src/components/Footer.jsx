import { Button, Tooltip } from '@chakra-ui/react';
import React from 'react'
import "./footer.css";


const Footer = () => {
    return (
        <div className='footerwtf'>

            <div className='subfooter'>
                <div className='logocontrol'>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGXC8dnc7_DLtDDsK4ciwC30FRRu94-hcpdA&usqp=CAU' />
                    <div>
                        <div className='hovereffect'>
                        <Tooltip   p="15" placement="top" hasArrow label='instagram' bg='red.600' className='logoin'>
  <i class="fa-brands fa-instagram  insta fa-brandsh " ></i>
</Tooltip>
                          

                        </div>
                        <div className='hovereffect1'>
                        <Tooltip   p="15" placement="top" hasArrow label='facebook' bg='red.600' className='logoin'>
 <i class="fa-brands fa-facebook-f fa-brands1" ></i>
</Tooltip>
                            
                        </div>
                        <div className='hovereffect2'>
                        <Tooltip   p="15" placement="top" hasArrow label='linkedin' bg='red.600' className='logoin'>
 <i class="fa-brands fa-linkedin-in fa-brands2" ></i>
</Tooltip>
                           
                        </div>

                    </div>

                </div>
                <div className='fontawesome'>
                    <ul>
                        <li className='wighthigh'>Quick link</li>
                        <li>About</li>
                        <li>FAQS</li>
                        <li>Privacy Policy</li>
                        <li>WTF in News</li>

                        <li>Terms & Conditions</li>
                        <li>Refund and Cancellation</li>
                    </ul>
                </div>
                <div className='fontawesome'>
                    <ul>
                        <li className='wighthigh'>Explore</li>
                        <li>Arenas</li>
                        <li>Studio</li>
                        <li>Nutrition</li>

                    </ul>
                </div>

                <div className='fontawesomelast'>
                    <ul>
<li className='wighthigh'>Contact</li>
<div>
<div><i class="fa-solid fa-location-dot"></i> </div>
    <div>  <li>Ro:S 1502,Amarali silicon city,sector 76,Noida </li></div>
</div>

                        <li><i class="fa-solid fa-location-dot"></i>Ground floor 8</li>

                        <li><i class="fa-solid fa-phone"></i>+919090639005</li>
                        <li><i class="fa-solid fa-envelope-open-text"></i>support@wtfup.me</li>
                    </ul>

                </div>



            </div>




        </div>
    )
}

export default Footer