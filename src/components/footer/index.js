import './style.css'
import {  FaTwitter } from 'react-icons/fa';
import footer from '../../assets/images/footer.png'
import horse from '../../assets/images/footer_horse.png'
import { SiDiscord } from 'react-icons/si'



function Footer() {
    return (
        <div className='footer_container'>
            <div className='footer_wrap'>

                <div className='sub_footer'>
                    <h2>COMMUNITY</h2>
                    <p className='join_p'>Join and follow us socials to stay up to date with Punters</p>
                    <div className='icons_container'><span><FaTwitter /></span><span><SiDiscord /> </span></div>
                    <img src={footer} alt='footer' />
                    <p className='credit_p'>All rights Reserved 2021</p>
                </div>
                <div className='horse_container'>
                    <img src={horse} alt='' />
                </div>

            </div>
        </div>

    )
}

export default Footer;