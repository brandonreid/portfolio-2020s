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
        <img className="dots" src="/img/port/dots.png" alt="Decorative Dots" />
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
        <h2>Portfolio</h2>
        <div className="container">
          <div className="title-row">
            <h3>Websites</h3>
            <p>
              Some websites I’ve made.
              <span>Most of my work is in web app design & development.</span>
            </p>
          </div>
          <div className="portfolio-highlight" style={{ borderColor: '#293134' }}>
            <span>Portfolio Highlight</span>
            <h4><a href="https://basalt.io/" target="_blank">Basalt --&gt;</a></h4>
            <img
              className="portfolio-highlight_sm-img"
              src="img/port/basalt-cropped.jpg"
              alt="Cropped Basalt Website"
            />
            <img
              className="portfolio-highlight_full-img"
              src="img/port/basalt-full.jpg"
              alt="Full Basalt Website Comp"
            />
            <p>
              Designed in Figma, built using <a href="https://getgrav.org/" target="_blank">Grav</a>.
              Special care was taken to make every aspect of the site editable from an admin panel
              so that non-technical marketing folk would be empowered to modify at will.
              The home page hero featured an interactive array of "color tokens", the visitor
              would be prompted to select a color and change it to another from a predefined
              pallet. When changed, the color used in one of the "component" representations would
              update, fallowed by the SVG based artwork (which was drawn by Portland based tattoo
              artist, Amado Bermudez).
            </p>
          </div>
          <div className="portfolio-highlight portfolio-highlight--left" style={{ borderColor: '#B20838' }}>
            <span>Portfolio Highlight</span>
            <h4>Trailercraft</h4>
            <img
              className="portfolio-highlight_sm-img"
              src="img/port/trailercraft-cropped.jpg"
              alt="Cropped Basalt Website"
            />
            <img
              className="portfolio-highlight_full-img"
              src="img/port/trailercraft-full.jpg"
              alt="Full Basalt Website Comp"
            />
            <p>
              Designed in Sketch, built using <a href="https://nextjs.org/" target="_blank">Next.js</a>.
              Because Trailercraft serves Alaska and internet connectivity can be unreliable,
              performance was key for this website. The site was server side rendered
              for SEO, but once bootstrapped on the users device, it worked like a single-page-app,
              only requesting the remaining content needed when navigating. Images were requested
              from the device and the exact width needed was requested via
              <a href="https://www.imgix.com/" target="_blank">Imgix</a>, so sizes were as optimized
              as possible. We used CosmicJS as the CMS, which in the end unfortunately proved too
              technical for the client.
            </p>
          </div>
          <h4 className="portfolio-list-intro">A couple more</h4>
          <div className="portfolio-list">
            <a className="portfolio-item" href="https://www.mygiftcardsupply.com/" target="_blank">
              <img src="/img/port/mygiftcardsupply.jpg" alt="My Gift Card Supply Website" />
              <h5>My Gift Card Supply</h5>
              <p>
                A WooCommerce Wordpress site. Learned a lot about A/B testing and the impact small
                changes can make on conversion rates.
              </p>
            </a>
            <a className="portfolio-item" href="http://thehighpointagency.com/" target="_blank">
              <img src="/img/port/thehighpointagency.jpg" alt="High Point Website" />
              <h5>High Point</h5>
              <p>
                Totally custom Wordpress site, custom post types and
                custom fields allow the client to control all content.
              </p>
            </a>
            <a className="portfolio-item" href="http://starwarsorder.com/" target="_blank">
              <img src="/img/port/starwarsorder.jpg" alt="Star Wars Order" />
              <h5>Star Wars Order</h5>
              <p>Just a site that tells you the order of the Star Wars movies.</p>
            </a>
          </div>
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
              <img src="/img/port/dude-walken.svg" alt="Person Walking" />
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
        <div className="portfolio-approach">
          <div className="container">
            <h3>A bit about how I design...</h3>
            <div className="portfolio-approach_point">
              <h4>Understand the Audience</h4>
              <img
                src="img/port/understand-audience.png"
                alt="User Personas"
                style={{ boxShadow: 'none' }}
              />
              <p>
                Great product design starts by researching, conversing with, and compiling data
                about end users. Being familiar with the people using your product, creating
                generalized personas with personality and referencing them often, builds
                <strong> empathy</strong>.
                Empathy is key to stimulating the passion it takes to bring a solution to a high
                level of craftsmanship. Clear, documented user personas also add critical
                perspective to solution discussions and benefit the entire organization, from
                design and development, to documentation, content creation, sales and marketing,
                etc.
              </p>
            </div>
            <div className="portfolio-approach_point">
              <h4>Define the Problem Well</h4>
              <img src="img/port/define-problem.jpg" alt="Small Problem Definition Example" />
              <p>
                With well defined, succinct problem definitions, design and development can often
                start solutioning together at the same time. This allows for a lean, agile
                approach. Also, by being targeted, we’re better equipped to create solutions that
                enhance the overall value stream.
              </p>
              <p>
                Problem definitions can take varying forms from bulleted lists, to well defined
                user journeys. They should always avoid solution specific statements, but could
                highlight current data models, etc.
              </p>
            </div>
            <div className="portfolio-approach_point">
              <h4>Design and code systematically for quality at scale</h4>
              <img src="img/port/design-systematically.jpg" alt="Design Tokens Example" />
              <p>
                Design systems are the foundation of consistency and quality at scale. With a well
                integrated system, every past feature can benefit from improvements and
                modernizations applied to new features.
              </p>
              <p>
                Personally, design systems have been a major focus in my career going back over
                5 years.
              </p>
            </div>
            <div className="portfolio-approach_point">
              <h4>Validate and Iterate</h4>
              <img
                src="img/port/validate-and-iterate.png"
                alt="Abstract Chart Shapes"
                style={{ boxShadow: 'none' }}
              />
              <p>
                Test early and often. Design and build with the intention to iterate. Test
                passively by incorporating data collection into designs. Test actively by engaging
                users throughout and after the design and development process. Findings from tests
                contribute to understanding the audience.
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          {/* <div>
            <h3>Read a Case Study</h3>
            <img src="img/port/case-study.jpg" alt="Case study UI hint" />
            <p>
              <a
                href="/case-study/field-auditing-application/"
              >Field Auditing Application – The story of a mobile web app refactor -&gt;</a></p>
          </div> */}
          <div className="portfolio-bonus">
            <h3>Bonus!</h3>
            <p>
              I also have a other skills like leadership, business/sales support, and project
              management. Check out this&nbsp;
              <a
                href="https://www.figma.com/file/DusTJV3cCQs9V6Ho5WTRnd/UX-Integrated-Product-Sprint-Cycle?node-id=21%3A0"
                target="_blank"
              >UX Integrated Product Sprint Cycle</a> I designed and detailed in Figma!
            </p>
          </div>

          {/* <div className="title-row">
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
              <img
                src="/img/portfolio/cmixpatterns.jpg"
                alt="Benchmark Intelligence Pattern Library"
              />
              <h4>Dynata CMIX</h4>
              <p>
                Leveraging LivingCSS for documentation.
                Used in all 6+ CMIX applications. (VPN access only, unfortunately)
              </p>
            </div>
            <a className="portfolio-item" href="http://usebenchmark.github.io/pattern-library/" target="_blank">
              <img
                src="/img/portfolio/benchmarkpatterns.jpg"
                alt="Benchmark Intelligence Pattern Library"
              />
              <h4>Benchmark Intelligence</h4>
              <p>
                Leveraging LivingCSS for documentation.
                It's used in all of Benchmark's apps and their public website.
              </p>
            </a>
            <a className="portfolio-item" href="http://decipher-design.com/bui/" target="_blank">
              <img src="/img/portfolio/bui.jpg" alt="BUI Pattern Library for Decipher" />
              <h4>Decipher Inc.</h4>
              <p>
                Created for Decipher Inc. (now FocusVision),
                BUI was the first pattern library I created.
              </p>
            </a>
          </div> */}

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
