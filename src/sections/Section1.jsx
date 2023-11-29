import React from 'react';
import '../scss/css/section1.css';
import { Icon } from '@iconify/react';


import soundwave from '../images/soundwave.png';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';

const Section1 = () => {
  return (
    <div className='section1'>
          <nav className="navbar">
        <li className="nav-item nav-icon">
            <Icon icon="la:podcast" className='podcast-icon'/>    
            <h3 className="icon-text">Podcast Central</h3>
        </li>
        <li className="nav-item">Features</li>
        <li className="nav-item">How It Works</li>
        <li className="nav-item">Pricing / Plans</li>
        <li className="nav-item">Categories</li>
        <li className="nav-item">About</li>
        <img src={soundwave} className="soundwave" alt='Soundwave'></img>
    </nav>
    <div id="section1">
        <div className="main-top">
            <div className="main-text1">
                <p>New Podcasts Daily</p>
            </div>
            <div className="main-text2">
                <h4>The Best Place To Listen To Your Favorite <span class="podcast-text">Podcasts.</span></h4>
            </div>
            <div className="main-text3">
                <p>Looking for a new way to stay informed and entertained? Look no further! With high-quality audio and expert hosts, our podcasts will keep you engaged and up-to-date on the latest trends and news. So why wait? Check us out today and start listening now!</p>
            </div>
            <div className="main-buttons">
                <button class="main-button1">Start your free trial</button>
                <button class="main-button2"><Icon icon="octicon:play-24" className='button-icon'/>See how it works</button>
            </div>
        </div>
        <div className="main-bottom">
            <div className="image2-container">
                <img src={image2} className="image2" alt='Profile 2'></img>
                <div className="image2-bg"></div>
            </div>
            <div className="image1-container">
                <img src={image1} className="image1" alt='Profile 1'></img>
                <div className="image1-bg"></div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Section1
