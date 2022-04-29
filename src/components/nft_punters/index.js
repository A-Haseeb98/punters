import './style.css'
import h1 from "../../assets/images/h44.jpg"
import layer from "../../assets/images/rarity_layer.png"


function Punters() {
    return (
        <div className='back_wrapper'>
            <div className='rarity_design'>
                <img src={layer} alt="" />
            </div>
            <div className='nft_punters_main'>
                <div className='nft_punters_text'>
                    <h1>NFT Punters, A New Paradigm For the NFT Industry</h1>
                    <p>You’ve probably all been burnt with all the hype surrounding most if not all of the NFT collections. Bold claims, unrealistic roadmaps developed by some kids in their garage looking for a big payday and floor price down the drain leaving you completely dry.
                    </p> <br />
                    <p>These days are over! Punters Club is the first of its kind with a unique NFT concept, and a fully developed roadmap! Yep, you’re not investing into some hypothetical roadmap. We’ve done it for you: the complete experience is ready to go when you join, you get more value right away (and not just a useless jpg file with some hope), and your investment is secured by a real business model and existing assets.
                    </p> <br />
                    <p>Stop earning peanuts or fake tokens…Punters Club prizes are made of real money you receive right away (ETH) when a race is completed.</p>
                </div>
                <div className='nft_punters_image'>
                    <img src={h1} alt="" />
                </div>
            </div>
        </div>

    )
}

export default Punters;