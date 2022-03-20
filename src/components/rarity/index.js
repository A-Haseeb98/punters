import './style.css'
import h1 from "../../assets/images/h1.png"
import h2 from "../../assets/images/h2.png"
import h3 from "../../assets/images/h3.png"
import h4 from "../../assets/images/h4.png"
import layer from "../../assets/images/rarity_layer.png"

function Rarity() {
    return (
        <div className='rarity_container' id='rarity'>
            <div className='rarity_design'>
                <img src={layer} alt="" />
                <div className='head_div'>
                    <h1 className='r_main_heading'>
                        RARITY
                    </h1>
                </div>

            </div>
            <div className='rarity_wrapper'>
                <div className='rarity_ima_wrapper'>
                    <div className='first_img_cont'>
                        <img src={h1} alt="" />
                        <img className='second' src={h2} alt="" />
                    </div>
                    <div className='second_img_cont'>
                        <img src={h3} alt="" />
                        <img className='second' src={h4} alt="" />
                    </div>
                </div>
                <div className='rarity_content'>
                    <h1>
                        10,000 RACE <br /> HORSES
                    </h1>
                    <p className='why_text'>Why we are bullish on BSCWIN <br /> cyouts to users without the need to sustain<br /> trading volume.Why we are bullish on BSCWIN<br />cyouts to users without the need to sustain<br /> trading volume.<br /></p>
                </div>
            </div>
        </div>
    )
}

export default Rarity;