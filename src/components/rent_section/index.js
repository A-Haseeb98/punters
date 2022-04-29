import './style.css'
import h1 from "../../assets/images/h11.jpg"
import Trainer from '../trainer_section';
import layer from "../../assets/images/Layer.png"



function Rent() {
    return (
        <div className='main_pink_container' >
            <div className='rarity_design'>
                <img src={layer} alt="" />
                <div className='head_div'>

                </div>

            </div>
            <div className='rent_section_main'>
                <div className='rent_section_image'>
                    <img src={h1} alt="" />
                </div>
                <div className='rent_section_text'>
                    <h1>Rent Your Horses For More Profits</h1>
                    <p>The great news is that you can also rent your NFT horses out to other players in order so they can also race them. Can you think of a better and cooler way to make passive income than your virtual horse becoming an invaluable metaverse asset?
                    </p> <br />
                    <p>As a race horse NFT owner you can Self manage your horse and enter it in whatever races you like, or rent your horse out to others to use in races for a fee you set. You can also have your horse entered into a stable were a trainer will manage your asset and select the best races for your horse getting you the most bang for your buck.
                    </p> <br />
                    <p>You will be rewarded points for entering races and finishing position on top of the prize money for winning races.</p>
                    <br />
                    <p>This can be used in our rewards room to buy all sorts of gifts, nfts, bitcoin or experiences.
                        you will also have the unique opportunity to compete in grand slam races with prime rewards going up to 250 ETH Yes – you’ve read that right!
                    </p>
                </div>

            </div>
            <hr className='break_line' />

            <Trainer />
        </div>
    )
}

export default Rent;