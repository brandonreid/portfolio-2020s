// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import { useSiteMetadata } from '../hooks';

const IndexTemplate = () => {
  const { subtitle: siteSubtitle } = useSiteMetadata();

  return (
    <Layout title="Brandon Reid – Portfolio" description={siteSubtitle}>
      <div className="portfolio-top">
        <h1>Brandon Reid <span>is a</span> designer <span>that can</span> code<span>.</span></h1>
        <div className="nav-wrapper">
          <svg
            className="triangle"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="107.1px"
            height="110.1px"
            viewBox="0 0 107.1 110.1"
          >
            <polygon points="83.7,0 0,75.3 107.1,110.1 "/>
          </svg>
          <svg
            className="big-octogon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="306.3px"
            height="306.3px"
            viewBox="0 0 306.3 306.3"
          >
            <polygon className="big" points="44.9,44.9 0,153.2 44.9,261.5 153.2,306.3 261.5,261.5 306.3,153.2 261.5,44.9 153.2,0 "/>
            <polygon className="small" points="66.6,66.6 30.8,153.2 66.6,239.7 153.2,275.5 239.7,239.7 275.5,153.2 239.7,66.6 153.2,30.8 "/>
          </svg>
          <nav>
            <ul>
              <li><a className="active" href="/">Portfolio</a></li>
              <li><a href="/about">About Brandon</a></li>
            </ul>
          </nav>
        </div>
        <img className="dots" src="/img/portfolio/dots.png" alt="Decorative Dots" />
        <svg
          className="divider"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="1080px"
          height="268px"
          viewBox="0 0 1080 268"
        >
          <polygon className="area" points="1080,3 0,268 0,0 1080,0 "/>
          <polygon className="line" points="0,254.4 0,256 1080,3 1080,1.3 "/>
        </svg>
      </div>

      <div className="portfolio-pieces">
        <h2>Portfolio Pieces</h2>
        <div className="container">
          <div className="title-row">
            <h3>Websites</h3>
            <p>
              Some websites I’ve made that are in the wild.
              <span>Most of my work is in web app design & development.</span>
            </p>
          </div>
          <div className="portfolio-list">
            <a className="portfolio-item" href="https://basalt.io/" target="_blank">
              <img src="/img/portfolio/basalt.jpg" alt="Basalt Website" />
              <h4>Basalt</h4>
              <p>Built using Grav CMS and Knapsack for component management.</p>
            </a>
            <a className="portfolio-item" href="https://trailercraft.com/" target="_blank">
              <img src="/img/portfolio/trailercraft.jpg" alt="Trailercraft Website" />
              <h4>TrailerCraft, Inc</h4>
              <p>Built with Next/React, uses Cosmic Js for the backend/CMS.</p>
            </a>
            <a className="portfolio-item" href="https://www.mygiftcardsupply.com/" target="_blank">
              <img src="/img/portfolio/mygiftcardsupply.jpg" alt="My Gift Card Supply Website" />
              <h4>My Gift Card Supply</h4>
              <p>A WooCommerce wordpress site.</p>
            </a>
            <a className="portfolio-item" href="http://thehighpointagency.com/" target="_blank">
              <img src="/img/portfolio/thehighpointagency.jpg" alt="High Point Website" />
              <h4>High Point</h4>
              <p>
                Totally custom Wordpress site, custom post types and
                custom fields allow the client to control all content.
              </p>
            </a>
            <a className="portfolio-item" href="http://starwarsorder.com/" target="_blank">
              <img src="/img/portfolio/starwarsorder.jpg" alt="Star Wars Order" />
              <h4>Star Wars Order</h4>
              <p>Just a site that tells you the order of the Star Wars movies.</p>
            </a>
            <div className="empty-portfolio-item">
              <div className="left">
                <svg
                  className="mini-octogon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="244.7px"
                  height="244.7px"
                  viewBox="0 0 244.7 244.7"
                >
                  <polygon points="35.8,35.8 0,122.4 35.8,208.9 122.4,244.7 208.9,208.9 244.7,122.4 208.9,35.8 122.4,0 "/>
                </svg>
              </div>
              <div className="dude-walken">
                <img src="/img/portfolio/dude-walken.svg" alt="Person Walking" />
              </div>
              <div className="right">
                <svg
                  className="mini-octogon"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="244.7px"
                  height="244.7px"
                  viewBox="0 0 244.7 244.7"
                >
                  <polygon points="35.8,35.8 0,122.4 35.8,208.9 122.4,244.7 208.9,208.9 244.7,122.4 208.9,35.8 122.4,0 "/>
                </svg>
              </div>
            </div>
          </div>

          <div className="title-row">
            <h3>Design Systems</h3>
            <p>
              Some design systems I’ve made.
              <span>They’re not flashy, but they were each successful.</span>
            </p>
          </div>
          <div className="portfolio-list">
            <a className="portfolio-item" href="https://design.basalt.io/" target="_blank">
              <img src="/img/portfolio/crux.jpg" alt="Crux Design System" />
              <h4>Crux</h4>
              <p>Built using Knapsack. Crux is the design system powering basalt.io</p>
            </a>
            <div className="portfolio-item -no-link" href="https://criticalmix.bitbucket.io/cmix_pattern_library/" target="_blank">
              <img src="/img/portfolio/cmixpatterns.jpg" alt="Benchmark Intelligence Pattern Library" />
              <h4>Dynata CMIX</h4>
              <p>
                Leveraging LivingCSS for documentation.
                Used in all 6+ CMIX applications. (VPN access only, unfortunately)
              </p>
            </div>
            <a className="portfolio-item" href="http://usebenchmark.github.io/pattern-library/" target="_blank">
              <img src="/img/portfolio/benchmarkpatterns.jpg" alt="Benchmark Intelligence Pattern Library" />
              <h4>Benchmark Intelligence</h4>
              <p>
                Leveraging LivingCSS for documentation.
                It's used in all of Benchmark's apps and their public website.
              </p>
            </a>
            {/* <a className="portfolio-item" href="http://decipher-design.com/bui/" target="_blank">
              <img src="/img/portfolio/bui.jpg" alt="BUI Pattern Library for Decipher" />
              <h4>Decipher Inc.</h4>
              <p>
                Created for Decipher Inc. (now FocusVision),
                BUI was the first pattern library I created.
              </p>
            </a> */}
          </div>

          <div className="title-row -w-link">
            <h3>Case study</h3>
            <p>Field Auditing Application <span>The story of a mobile web app refactor.</span></p>
            <div className="separator"></div>
            <a href="/case-study/field-auditing-application/">READ</a>
          </div>
        </div>
        <svg
          className="big-octogon"
          version="1.1" xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="306.3px"
          height="306.3px"
          viewBox="0 0 306.3 306.3"
        >
          <polygon className="big" points="44.9,44.9 0,153.2 44.9,261.5 153.2,306.3 261.5,261.5 306.3,153.2 261.5,44.9 153.2,0 "/>
          <polygon className="small" points="66.6,66.6 30.8,153.2 66.6,239.7 153.2,275.5 239.7,239.7 275.5,153.2 239.7,66.6 153.2,30.8 "/>
        </svg>
      </div>
    </Layout>
  );
};

export default IndexTemplate;
