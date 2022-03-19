import "./style.css"
import logo from "../../assets/images/logo.png"


function Navbar() {
    return (
        <div className="main_container">
            <div className="sub_main_container_navbar">
                <div className="logo_container">
                    <img src={logo} alt='logo' />
                    <p>PUNTERS <br /> <span>NFT</span></p>
                </div>
                <div className="text_container">
                    <span>RARITY</span>
                    <span>ROADMAP</span>
                    <span>ABOUT</span>
                </div>
                <div className="btn_container">
                    <button>
                        MINTING SOON
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Navbar;