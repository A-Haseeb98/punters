import './style.css'
import horse from "../../assets/images/horse.png"
import welcome_design from "../../assets/images/1111.png"
import bottom_design from "../../assets/images/box.png"

function Welcome() {
    return (
        <div className="welcome_main_container" >
            <div className='left_cont'>
                <div className="welcome_content_container">
                    <h1>WELCOME TO THE</h1>
                    <h2>PUNTERS CLUB<span>.</span></h2>
                    <p>Empowering your crypto investment portfolio with the most innovative and lucrative NFT Experience has never been easier.
                        <br />
                        <br />

                        Punters Club is the latest project based on Ethereum blockchain that we created to be the most customer driven game for all the participants included, with a unique systematized approach never seen in the NFT world so far.
                        <br />
                        <br />

                        Punters Club prides itself in its rarity – consisting of only 8888 race horse NFTS.
                        <br />
                        <br />

                        Becoming the owner of one of these horses is your ticket of entry to the incredible races taking place in the racing league game. Come and test yourself in prestigious races with fierce competition that leaves only the best on top.
                        <br />
                        <br />

                        Get to the top of the game and earn incredible gift assets, prize money, and reward points, and increase the value of your NFT horse along the way.
                    </p>
                    <button>JOIN DISCORD</button>

                </div>
                <div className='center_design'>
                    <img src={welcome_design} alt='' />
                </div>

            </div>
            <div className='right_cont'>
                <div className="img_welcome_container">
                    <img src={horse} alt='Horse' />
                </div>
                <div className='bottom_design'>
                    <img src={bottom_design} alt='' />
                </div>
            </div>
        </div>

    )
}

export default Welcome;