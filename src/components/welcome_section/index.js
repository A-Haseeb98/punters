import './style.css'
import horse from "../../assets/images/horse.png"
import welcome_design from "../../assets/images/image1.png"

function Welcome() {
    return (
        <div className="welcome_main_container">
            <div className='left_cont'>
                <div className="welcome_content_container">
                    <h1>WELCOME TO THE</h1>
                    <h2>PUNTERS CLUB</h2>
                    <p>Why We Are Bullish On BSCWIN Cyouts </p>
                    <p>Cyouts To Users Without The Need To</p>
                    <p>Sustain Trading Volume. Why We Are</p>
                    <p>Bullish On BSCWIN</p>
                    <p>Cyouts To Users Without The Need To</p>
                    <p>To Sustain Trading Volume.</p>
                    <button>JOIN DISCORD</button>
                    <div className='center_design'>
                        <img src={welcome_design} alt='welcome_design' />
                    </div>
                </div>
            </div>
            <div className='right_cont'>
                <div className="img_welcome_container">
                    <img src={horse} alt='Horse' />
                </div>
            </div>
        </div>

    )
}

export default Welcome;