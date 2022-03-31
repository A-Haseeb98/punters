import './style.css'
import h1 from "../../assets/images/h2.png"

function Trainer() {
    return (
        <div className='trainer_section_main'>
       
            <div className='trainer_section_text'>
                <h1>Trainer License, want even more fun and money?</h1>
                <p>Only the select few can earn their trainers license, reserved solely for the best of the best. With a trainer license, you will have the unique opportunity to manage up to 100 horses as well as delegate them to competitions by choosing the races you prefer they participate in.
                </p> <br />
                <p>With your license you will be controlling the asset of others, giving you the ability to organize their rentals for weekly compensation as well as prize money in exchange for weekly training fees and percentage of winning prize money.
                </p> <br />
                <p>Being a trainer is highly lucrative opportunity as with the number of horses that you are able to rent and manage, you can easily be making 6-7 figure returns on your stable, make this your full time job!
                </p>
            </div>
            <div className='trainer_section_image'>
                <img src={h1} alt="" />
            </div>

        </div>
    )
}

export default Trainer;