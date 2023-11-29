import React from 'react';
import '../scss/css/section4.css';
import { Icon } from '@iconify/react';


const Section4 = () => {
  return (
    <div className='section4'>
      <section className='sect4-top'>
        <h4 className='sect4-header'>Share your ideas about your favorite topics at <span className='prices'>affordable prices.</span></h4>
        <div className='price-btns'>
            <button className='price-btn price1'>Monthly</button>
            <button className='price-btn price2'>Yearly</button>
        </div>
        <div className='price-cards'>
            <div className='price-card price-card1'>
                <p className='card1-title'>Basic</p>
                <p className='card1-price'>$30</p>
                <ul className='card1-list'>
                    <li className='card1-list-item'><Icon icon="carbon:checkmark-outline" className='price1-icon' /> Up to 20 channel subscriptions</li>
                    <li className='card1-list-item'><Icon icon="carbon:checkmark-outline" className='price1-icon' /> Unlimited episode viewing</li>
                    <li className='card1-list-item'><Icon icon="carbon:checkmark-outline" className='price1-icon' /> 50,000 monthly downloads</li>
                    <li className='card1-list-item'><Icon icon="carbon:checkmark-outline" className='price1-icon' /> Price shown after 25% discount applied. Discount applicable after first 3 months.</li>
                </ul>
                <button className='plan1-btn'>Start your 7 day free trial <Icon icon="uil:arrow-right" className='card-arrow'/></button>
            </div>
            <div className='price-card price-card2'>
            <h4 className='card2-title'>Premium+</h4>
                <h4 className='card2-price'>$60</h4>
                <ul className='card2-list'>
                    <li className='card2-list-item'><Icon icon="carbon:checkmark-outline" className='price2-icon' /> Basic</li>
                    <li className='card2-list-item'><Icon icon="carbon:checkmark-outline" className='price2-icon' /> Advertisement Free Listening</li>
                    <li className='card2-list-item'><Icon icon="carbon:checkmark-outline" className='price2-icon' /> 100,000 monthly downloads</li>
                    <li className='card2-list-item'><Icon icon="carbon:checkmark-outline" className='price2-icon' /> Advanced podcast with Google Analytics, Integration, Host Bio, Domains</li>
                </ul>
                <button className='plan2-btn'>Start your 7 day free trial <Icon icon="uil:arrow-right" className='card-arrow'/></button>
            </div>
        </div>
      </section>
      <section className='sect4-bottom'>
        <div className='email-container'>
            <p className='email-header'>Sign up to receive notifications for new and popular podcast releases.</p>
            <input type='email' className='email-input' placeholder='enter your email address here'></input>
            <Icon icon="octicon:arrow-right-16" className='email-arrow'/>
        </div>
      </section>
      <footer className='footer'>
        <section className='footer1'>
            <h4 className='footer1-header'>
                <Icon icon="fa:podcast" className='footer1-icon'/> Podcast Central
            </h4>
            <p className='footer1-text'>2023 Best Podcast Award winner and choice for setting the standard for excellence in the industry, offering innovative features, intuitive design, and unparalleled support for creators. Whether you're a curious learner, a passionate enthusiast or just in need of some entertaining distraction, this is the best platform for you. Don't miss out and join today!</p>
        </section>
        <section className='footer2'>
            <ul className='footer2-list'>
            <h4 className='footer2-header'>Quick Links</h4>
                <li className='footer2-list-item'>Features</li>
                <li className='footer2-list-item'>How It Works</li>
                <li className='footer2-list-item'>Pricing</li>
                <li className='footer2-list-item'>Categories</li>
                <li className='footer2-list-item'>About</li>
            </ul>
        </section>
        <section className='footer3'>
            <ul className='footer3-list'>
            <h4 className='footer3-header'>Other Links</h4>
                <li className='footer3-list-item'>Privacy</li>
                <li className='footer3-list-item'>Terms & Conditions</li>
                <li className='footer3-list-item'>Disclaimer</li>
                <li className='footer3-list-item'>FAQ</li>
            </ul>
        </section>
        <section className='footer4'>
            <ul className='footer4-list'>
                <li className='footer4-list-item'>
                    <Icon icon="mdi:instagram" className='footer-icon'/>
                </li>
                <li className='footer4-list-item'>
                    <Icon icon="mingcute:twitter-line" className='footer-icon'/>
                </li>
                <li className='footer4-list-item'>
                    <Icon icon="mingcute:facebook-line" className='footer-icon'/>
                </li>
            </ul>
        </section>
      </footer>
    </div>
  )
}

export default Section4
