import React from 'react'
import './Welcome.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_img from '../Assets/hero_image.png'

export const Welcome = () => {
  return (
    <div className='welcome'>
        <div className="welcome-left">
            <h2>NEWS ARRIVALS ONLY</h2>
            <div>
                <div className="welcome-hand-icon">
                    <p>Welcome</p>
                    <img src={hand_icon} alt="" />
                </div>
                <p>to</p>
                <p>D-Shopping</p>
            </div>
            <div className="welcome-lastest-btn">
                <div>See more</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
        <div className="welcome-right">
            <img src={hero_img} alt="" />
        </div>
    </div>
  )
}
export default Welcome
