import cover from '../../assets/images/cover.png'
import './style.css'

function Cover() {
    return (
        <div className='main_cover_container'>
            <div className='cover_container'>
                <img src={cover} alt="cover" />
                <div className='headline_container'>
                    <h1>Not Just An NFT: A Complete Immersive Horse Racing Gaming & Betting Experience. Ready To Go When You Join</h1>
                    <button>JOIN OUR DISCORD</button>

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