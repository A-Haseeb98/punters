import './style.css'
import h1 from "../../assets/images/h66.jpg"
import h2 from "../../assets/images/h22.jpg"
import h3 from "../../assets/images/h33.jpg"
import h4 from "../../assets/images/h44.jpg"
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
                        8’888 Hand Crafted <br /> HORSES
                    </h1>
                    <p className='why_text'>Each horse has a unique set of traits to make its look 100% unique compared to others.
                        On top of that, each horse also carries unique racing properties that can evolve with time to make your racing horse even more competitive.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Rarity;