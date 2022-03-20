import './style.css'
import layer from "../../assets/images/Layer.png"


function Roadmap() {
    return (
        <div className='first_main' id='roadmap'>
            <div className='design_layer'>
                <img src={layer} alt="" />
            </div>
            <div className='rm_heading_cont'>
                <h1>
                    ROADMAP
                </h1>
            </div>
            <div className='roadmap_content'>
                <div className='sub_cont'>
                    <p className='num_container'>10%</p>
                    <p className='rm_text_cont'>Give away NFT </p>

                </div>
                <div className='sub_cont'>
                    <p className='num_container'>25%</p>
                    <p className='rm_text_cont'>Tattoo giveaway</p>

                </div>
                <div className='sub_cont'>
                    <p className='num_container'>50%</p>
                    <p className='rm_text_cont'>Buy land in metaverse open up tattoo related ventures that works in both realize and Metaverse. which will generate income that will be distributed amongst crystal holders</p>

                </div>
                <div className='sub_cont'>
                    <p className='num_container'>75%</p>
                    <p className='rm_text_cont'>Finalize partnerships with new and major tattoo companies. Announce tattoo artists for upcoming artist series.</p>

                </div>
                <div className='sub_cont'>
                    <p className='num_container'>100%</p>
                    <p className='rm_text_cont'>Announce upcoming Tattoo 2.0 Game. Road map 2.0 unveiled. Metaverse land unveiled. </p>

                </div>

            </div>
        </div>
    )
}

export default Roadmap;