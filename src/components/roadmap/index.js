import './style.css'
import layer from "../../assets/images/Layer.png"
import bottom_design from "../../assets/images/box.png"
import Opportunities from '../opportunities_section';


function Roadmap() {
    return (
        <div className='first_main' id='roadmap'>
            <div className='design_layer'>
                <img src={layer} alt="" />
                {/* <div className='bottom_design2'>
                    <img src={bottom_design} alt='' />
                </div> */}
            </div>
            <div className='rm_heading_cont'>
                <h1>
                    Versions & Roadmap
                </h1>
                <p className='road_text'> 
                    V1 Roadmap is fully developed, tested and operational. You can start racing and betting right away. All the above is fully ready, and not part of an hypothetical roadmap that will never see the light of day. Join, Play & Earn right away.
                    <br />
                    <br />

                    As with any game, we’re already planning and working on future versions to add more features, improve your experience and imagine even more lucrative opportunities. Here are some of those:
                    <br />
                    <br />


                    V2: a complete betting app. So more people will be able to bet on races (even without owning NFT horses). They won’t be able to compete, but they will be able to bet. Which means more money pooled into races and thus more cash prizes for the winners and more opportunities. A track will also be purchased in the metaverse to host the races.

                </p>
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
            <hr className='break_line' />
            <Opportunities />
        </div>
    )
}

export default Roadmap;