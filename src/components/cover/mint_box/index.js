import './index.css'

import { HiPlus, HiMinus } from 'react-icons/hi'
import { RiCloseFill } from 'react-icons/ri'
import { useState } from 'react'

function MintBox() {
  let price = 0.09;
  const [quantity, setQuantity] = useState(1)
  const [close, setClose] = useState(false)
  let clickHandler = (num, sign) => {
    if (quantity < 3 && sign === '+') {
      setQuantity(quantity + num)
    }
    else if (quantity > 1 && sign === '-') {
      setQuantity(quantity - num)
    }
  }

  return (
    <div className='mint_container'>
      <div className="message_box">
        <p className='alert-p'>Minting Is Opened <br /> For Whitelisted Addresses. </p>
      </div>
      {
        close ? <div className='notification_box'>
          <p><span className='type'>Error! </span> Email address is already registered.</p>
          <span onClick={() => setClose(false)} className='cut'><RiCloseFill color='black' /></span>
        </div> : null
      }

      <div className="sellector_buttons_wrapper">
        <button className='plus_minus_button' onClick={() => clickHandler(1, '-')}>
          <HiMinus  />
        </button>
        <div >
          <span className='quantity'> QUANTITY</span>
          <span className='mint_qantity'>{quantity}</span>

        </div>

        <button className='plus_minus_button' onClick={() => clickHandler(1, '+')}>
          <HiPlus  />
        </button>
      </div>
      <p className='mint_price'>
        {(price * quantity).toFixed(2)} ETH
      </p>
      <p className="last_para">
        You can mint up to 3 NFT per transaction. <br />
      </p>
      <button
        onClick={() => setClose(true)}
        className="connect_btn" >
           MINT NOW
      </button>
    </div>

  )
}

export default MintBox;