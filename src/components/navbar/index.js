import "./style.css"
import logo from "../../assets/images/logo.png"
import { HashLink } from 'react-router-hash-link';
import { SiDiscord } from 'react-icons/si'

import { FaTwitterSquare, FaAlignRight, FaInstagram, FaAlignJustify } from 'react-icons/fa'
import { useState } from 'react';

function Navbar() {

    const [toggle, setToggle] = useState(false)
    const handleClick = (value) => {
        setToggle(!value)
    }

    return (
        <>
            <div className="main_container">
                <div className="sub_main_container_navbar">
                    <div className="logo_container">
                        <img src={logo} alt='logo' />
                        <p>PUNTERS <br /> <span>NFT</span></p>
                    </div>
                    <div className="text_container">
                        <span> <HashLink smooth to="/#rarity">RARITY</HashLink></span>
                        <span><HashLink smooth to={'/#roadmap'}>ROADMAP</HashLink></span>
                        <span><HashLink smooth to={'/#about'}>ABOUT</HashLink></span>
                    </div>
                    <div className="btn_container">
                        <button>
                            MINTING SOON
                        </button>
                    </div>
                </div>
            </div>
            <div className="navbar_container_mobile">
                <div className='header_wrapper'>
                    <div className="logo_container">
                        <img src={logo} alt='logo' />
                        <p>PUNTERS <br /> <span>NFT</span></p>
                    </div>

                    <div className='toggle_button'>
                        <button onClick={() => handleClick(toggle)} className='navbar_btn_mobile'>
                            {toggle ? <FaAlignRight /> : <FaAlignJustify />}</button>
                    </div>
                </div>

                {toggle ?
                    <ul className="menu_section_mobile">
                        <li > <HashLink smooth to="/#rarity">RARITY</HashLink></li>
                        <li ><HashLink smooth to={'/#roadmap'}>ROADMAP</HashLink></li>
                        <li ><HashLink smooth to={'/#about'}>ABOUT</HashLink></li>
                    </ul>
                    : null
                }
            </div>
        </>
    )
}

export default Navbar;