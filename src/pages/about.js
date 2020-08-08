import React from 'react';
import Layout from '../components/Layout';
import LittleHeader from '../components/LittleHeader';

const About = () => (
    <Layout title="About Brandon Reid" description="About Brandon Reid – Designer / Developer">
      <LittleHeader />
      <div className="bio">
        <div className="container constrained">
          <div className="row">
            <div className="col-xs-24">
              <h1>About Me</h1>
              <p>I grew up in <a href="https://www.google.com/maps/place/Nikiski,+AK+99611/@60.7206116,-151.3514065,11z/data=!3m1!4b1!4m5!3m4!1s0x56c5d875cab1e37d:0x8c8e9556499e7604!8m2!3d60.6902778!4d-151.2888889" target="_blank" title="Nikiski Alaska in Google Maps">Nikiski, AK</a>. Grand woods, frozen lakes and epic stars were my world. As technology grew with me, I used it as a portal to the outside world and a platform for a creativity.</p>
              <p>
                Since leaving Alaska I've had the opportunity to travel and live all over the
                country. I went to collage for design thinking I wanted to be strictly creative,
                but would learn that my mind is much more orientated to engineering than I thought.
                I've been fortunate in my career as the opportunities that came my way have helped
                me find a balanced craft in web design and development. Combining a certain amount
                of psychology and creativity with code has allowed me to work in a medium with
                seemingly limitless potential.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-photos">
        <img src="/img/about/award.jpg" alt="Stunting with an award." />
        <img src="/img/about/boomtown.jpg" alt="Boomtown demo day." />
        <img src="/img/about/jude.jpg" alt="My baby son, Jude." />
        <img src="/img/about/howaii.jpg" alt="My family in Howaii." />
        <img src="/img/about/kabobs.jpg" alt="Kabobs on the grill." />
        <img src="/img/about/michele.jpg" alt="My wife and I at a lake." />
        <img src="/img/about/pool.jpg" alt="At the pool hall." />
        <img src="/img/about/willow.jpg" alt="My daughter and I." />
      </div>
    </Layout>
);

export default About;
