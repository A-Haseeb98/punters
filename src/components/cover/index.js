import cover from '../../assets/images/cover.png'
import './style.css'
import MintBox from './mint_box'
import { useState } from 'react'
function Cover() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='main_cover_container'>
            <div className='cover_container'>
                <div className='image_wrapper_cover'>
                    <img src={cover} alt="cover" />
                </div>
                <div className='headline_container'>
                    <h1>Not Just An NFT: A Complete Immersive Horse Racing Gaming & Betting Experience. Ready To Go When You Join</h1>
                </div>
                <div className='mint_main_wrapper'>
                    <h1>Not Just An NFT: A Complete Immersive Horse Racing Gaming & Betting Experience. Ready To Go When You Join</h1>

                    {
                        toggle ?
                            <MintBox /> :
                            <button className='connect_btn' onClick={() => setToggle(true)}>MINT NOW</button>
                    }

                </div>
            </div>
            <div className='etherium_heading' id='about'>
                <h1>
                    MINTING ON ETHEREUM
                </h1>
            </div>
        </div>
    )
}

export default Cover;