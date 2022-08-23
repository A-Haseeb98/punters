import cover from '../../assets/images/cover.png'
import './style.css'
import MintBox from './mint_box'
function Cover() {
    return (
        <div className='main_cover_container'>
            <div className='cover_container'>
                <img src={cover} alt="cover" />
                <div className='headline_container'>
                    <MintBox />
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