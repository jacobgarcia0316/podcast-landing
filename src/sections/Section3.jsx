import React from 'react';
import '../scss/css/section3.css';
import { Icon } from '@iconify/react';
import tm1 from '../images/thumbnail1.jpg';
import tm2 from '../images/thumbnail2.jpg';
import tm3 from '../images/thumbnail3.jpg';
import tm4 from '../images/thumbnail4.jpg';
import tm5 from '../images/thumbnail5.jpg';
import tm6 from '../images/thumbnail6.jpg';
import tm7 from '../images/thumbnail7.jpg';
import bannerImg from '../images/banner-img.png';
import soundwave2 from '../images/soundwave2.png';

const Section3 = () => {
  return (
    <div className='section3'>
      <section className='sect3-top'>
        <header className='sect3-topHeader'>We make your <span className='podcasting'>podcasting</span> easy!</header>
        <p className='sect3-paragraph'>Discover the ultimate podcasting experience with us. Say goodbye to cluttered interfaces and endless searching for your next favorite show. With us, you can easily find, subscribe, and listen to thousands of podcasts all in one place.</p>
      </section>
      <section className='sect3-middle'>
        <div className='sect3-card'>
            <Icon icon="ep:microphone" className='sect3-card-icon microphone'/>
            <h4 className='card-header'>Record Your Podcast</h4>
            <p className='sect3-card-paragraph'>Record your podcast, you can mention everything about the topic first!</p>
        </div>
        <div className='sect3-card'>
            <Icon icon="ph:gear" className='sect3-card-icon gear'/>
            <h4 className='card-header'>Edit Your Podcast</h4>
            <p className='sect3-card-paragraph'>Listen to the raw version first and then edit where required.</p>
        </div>
        <div className='sect3-card'>
            <Icon icon="material-symbols:upload" className='sect3-card-icon upload'/>
            <h4 className='card-header'>Upload Your Podcast</h4>
            <p className='sect3-card-paragraph'>You can make your podcast viral by uploading it with simple steps.</p>
        </div>
        <div className='sect3-card'>
            <Icon icon="ph:crown-light" className='sect3-card-icon crown'/>
            <h4 className='card-header'>Go Premium+ Podcast</h4>
            <p className='sect3-card-paragraph'>Opt for the premium if you want to unlock the features that will make your work more easy!</p>
        </div>
      </section>
      <section className='sect3-bottom'>
        <div className='sect3-bottom-text'>
            <p className='sect3-bottom-text1'>Select and learn about your preferred <span className='categories'>categories</span> of podcasts.</p>
            <p className='sect3-bottom-text2'>Join us as we delve into the latest news, trends, and insights on the topics that matter most to you. Whether you're interested in technology, science, or personal growth, we have something for everyone.</p>
        </div>
        <div className='sect3-categories'>
            <li className='active'>All</li>
            <li className='sect3-list-item'>Music</li>
            <li className='sect3-list-item'>Technology</li>
            <li className='sect3-list-item'>Business</li>
            <li className='sect3-list-item'>Motivation</li>
            <li className='sect3-list-item'>Health</li>
        </div>
      </section>
      <section className='thumbnails'>
        <div className='thumbnail'>
            <section className='thumbnail-left'>
                <img src={tm1} className='thumbnail-image' alt='Thumbnail'></img>
            </section>
            <section className='thumbnail-right'>
                <header className='thumbnail-header'>Product Designer</header>
                <p className='thumbnail-paragraph'>12 episodes <br/> (120 minutes)</p>
                <button className='thumbnail-btn'><Icon icon="carbon:play-outline" className='thumbnail-icon'/>Play Now</button>
            </section>
        </div>
        <div className='thumbnail'>
            <section className='thumbnail-left'>
                <img src={tm2} className='thumbnail-image' alt='Thumbnail'></img>
            </section>
            <section className='thumbnail-right'>
                <header className='thumbnail-header'>Digital Marketing</header>
                <p className='thumbnail-paragraph'>11 episodes <br/> (130 minutes)</p>
                <button className='thumbnail-btn'><Icon icon="carbon:play-outline" className='thumbnail-icon'/>Play Now</button>
            </section>
        </div>
        <div className='thumbnail'>
            <section className='thumbnail-left'>
                <img src={tm3} className='thumbnail-image' alt='Thumbnail'></img>
            </section>
            <section className='thumbnail-right'>
                <header className='thumbnail-header'>Business Strategy</header>
                <p className='thumbnail-paragraph'>8 episodes <br/> (96 minutes)</p>
                <button className='thumbnail-btn'><Icon icon="carbon:play-outline" className='thumbnail-icon'/>Play Now</button>
            </section>
        </div>
        <div className='thumbnail'>
            <section className='thumbnail-left'>
                <img src={tm4} className='thumbnail-image' alt='Thumbnail'></img>
            </section>
            <section className='thumbnail-right'>
                <header className='thumbnail-header'>Success Stories</header>
                <p className='thumbnail-paragraph'>9 episodes <br/> (81 minutes)</p>
                <button className='thumbnail-btn'><Icon icon="carbon:play-outline" className='thumbnail-icon'/>Play Now</button>
            </section>
        </div>
        <div className='thumbnail'>
            <section className='thumbnail-left'>
                <img src={tm5} className='thumbnail-image' alt='Thumbnail'></img>
            </section>
            <section className='thumbnail-right'>
                <header className='thumbnail-header'>Self-Improvement</header>
                <p className='thumbnail-paragraph'>15 episodes <br/> (150 minutes)</p>
                <button className='thumbnail-btn'><Icon icon="carbon:play-outline" className='thumbnail-icon'/>Play Now</button>
            </section>
        </div>
        <div className='thumbnail'>
            <section className='thumbnail-left'>
                <img src={tm6} className='thumbnail-image' alt='Thumbnail'></img>
            </section>
            <section className='thumbnail-right'>
                <header className='thumbnail-header'>Investment</header>
                <p className='thumbnail-paragraph'>7 episodes <br/> (140 minutes)</p>
                <button className='thumbnail-btn'><Icon icon="carbon:play-outline" className='thumbnail-icon'/>Play Now</button>
            </section>
        </div>
        <div className='thumbnail'>
            <section className='thumbnail-left'>
                <img src={tm7} className='thumbnail-image' alt='Thumbnail'></img>
            </section>
            <section className='thumbnail-right'>
                <header className='thumbnail-header'>Technology</header>
                <p className='thumbnail-paragraph'>21 episodes <br/> (125 minutes)</p>
                <button className='thumbnail-btn'><Icon icon="carbon:play-outline" className='thumbnail-icon'/>Play Now</button>
            </section>
        </div>
      </section>
      <section className='banner'>
        <div className='banner-text'>
            <p className='banner-text1'>Are you excited to get started on your journey to becoming a podcaster?</p>
            <p className='banner-text2'>Sign up to get monthly insights to help you succeed!</p>
            <button className='banner-btn'>Sign up<Icon icon="maki:arrow" className='banner-icon'/></button>
        </div>
        <img src={bannerImg} className='banner-image banner-image1' alt='Banner'></img>
        <img src={soundwave2} className='banner-image banner-image2' alt='Soundwave'></img>
      </section>
    </div>
  )
}

export default Section3
