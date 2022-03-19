import cover from '../../assets/images/cover.png'
import './style.css'

function Cover(){
    return(
        <div className='main_cover_container'>
            <div className='cover_container'>
                <img src={cover} alt="cover" />
            </div>
            <div className='etherium_heading'>
                <h1>
                MINTING ON ETHEREUM 
                </h1>
            </div>
        </div>
    )
}

export default Cover;