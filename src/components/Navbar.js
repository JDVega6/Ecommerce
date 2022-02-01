import React, {useState} from 'react'
import { IconLogo, NavbarContainer, NavbarWrapper, Menu, MenuItem, MenuItemLink, MobileIcon } from './navbar.element'
import '../assets/style/style.css'
import { WiAlien } from "react-icons/wi";
import { IconContext } from 'react-icons';
import { FaLifeRing, FaMotorcycle, FaHome, FaTimes, FaUserCircle, FaBriefcase, FaPhoneAlt, FaAccusoft } from "react-icons/fa";

import { BsFillCartFill } from "react-icons/bs";



const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <div>
            
            <NavbarContainer>
                <NavbarWrapper>

                    <IconContext.Provider value={{style: {fontSize: "2em"}}}>
                   
                     <IconLogo>
                         <WiAlien/>
                         <p>Mototil</p>   
                     </IconLogo>

                    <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
                        {
                            showMobileMenu ? <FaTimes/> : <FaMotorcycle/>
                        }
                        
                    </MobileIcon>


                     <Menu open={showMobileMenu}>
                         <MenuItem>
                            <MenuItemLink>
                                <div>
                                    <FaHome/>
                                    HOME
                                </div>
                                
                            </MenuItemLink>
                         </MenuItem>

                         <MenuItem>
                            <MenuItemLink>
                                 <div>
                                    <FaUserCircle/>
                                    ABOUT ME
                                </div>
                                   
                            </MenuItemLink>
                         </MenuItem>

                         <MenuItem>
                            <MenuItemLink>
                                <div>
                                    <FaBriefcase/>
                                    PORTAFOLIO
                                </div>
                                
                            </MenuItemLink>
                         </MenuItem>

                         <MenuItem>
                            <MenuItemLink>
                               
                                    <BsFillCartFill/>
                                    
                                
                                
                            </MenuItemLink>
                         </MenuItem>

                      
                         <IconContext.Provider value={{style: {fontSize: "1em"}}}>
                       
                         </IconContext.Provider>

                     </Menu>

                     </IconContext.Provider>
                                       
                </NavbarWrapper>
            </NavbarContainer>
            
        </div>
    )
}

export default Navbar
