import React from 'react';
import '../scss/css/section2.css';
import { Icon } from '@iconify/react';

import portait1 from '../images/port1.png';
import portait2 from '../images/port2.png';
import portait3 from '../images/port3.png';
import listImage from '../images/list-image.png';

const Section2 = () => {
  return (
    <div className='section2'>
      <section className='sect2-top'>
        <header className='sect2-header'><span className='listen'>Listen</span> to podcasts from the creators themselves!</header>
        <p className='sect2-paragraph'>Are you ready to share your voice with the world? Our platform is the perfect place for podcast creators to reach a vast and engaged audience. So don't wait any longer, sign up now and start creating your next hit podcast!"</p>
        <button className='sect2-topBtn'>Click here!</button>
      </section>
      <section className='sect2-middle'>
        <div className='middle-card card1'>
          <img src={portait1} className='portait' alt='Card Portrait'></img>
          <div className='card-text'>
            <p className='card-text1'>Get to know about user research</p>
            <p className='card-text2'>Learn from the best who will make you forget the rest!</p>
            <button className='card-btn'><Icon icon="octicon:play-24" className='card-icon'/>Play Now</button>
          </div>
        </div>
        <div className='middle-card card2'>
          <img src={portait2} className='portait' alt='Card Portrait'></img>
          <div className='card-text'>
            <p className='card-text1'>Get to know about marketing</p>
            <p className='card-text2'>Learn the top-notch marketing strategies in no time.</p>
            <button className='card-btn'><Icon icon="octicon:play-24" className='card-icon'/>Play Now</button>
          </div>
        </div>
        <div className='middle-card card3'>
          <img src={portait3} className='portait' alt='Card Portrait'></img>
          <div className='card-text'>
            <p className='card-text1'>How to manage money well</p>
            <p className='card-text2'>Manage your finance with the strategic solutions.</p>
            <button className='card-btn'><Icon icon="octicon:play-24" className='card-icon'/>Play Now</button>
          </div>
        </div>
      </section>
      <section className='sect2-bottom'>
        <div className='bottom-left'>
          <p className='bottom-text1'>What makes us <span className='unique'>unique</span> from others?</p>
          <p className='bottom-list-header'>Here are 4 reasons that make you understand why we are unique!</p>
          <ul className='bottom-list'>
            <li className='bottom-list-item'><Icon icon="carbon:checkmark-outline" className='list-icon'/>Record your episodes any time, any place, anywhere.</li>
            <li className='bottom-list-item'><Icon icon="carbon:checkmark-outline" className='list-icon' />Talk and listen to people who inspire you.</li>
            <li className='bottom-list-item'><Icon icon="carbon:checkmark-outline" className='list-icon' />Share your thoughts with others.</li>
            <li className='bottom-list-item'><Icon icon="carbon:checkmark-outline" className='list-icon' />Compatible on all mobile device platforms.</li>
          </ul>
        </div>
        <img src={listImage} className='list-image' alt='List'></img>
      </section>
    </div>
  )
}

export default Section2
