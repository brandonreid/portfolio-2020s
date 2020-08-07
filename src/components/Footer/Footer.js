import React from 'react';
import { useSiteMetadata } from '../../hooks';

const Footer = () => {
  const { menu } = useSiteMetadata();

  return (
    <footer>
      <svg
        className="separator"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="1075px"
        height="35px"
        viewBox="0 0 1075 35"
      >
        <polygon className="blits" points="1075,35 0,18 0,0 1075,0 "/>
        <polygon className="vibe" points="1075,10 0,13 0,5 1075,9 "/>
      </svg>

      <div className="container">
        <nav>
          <ul>
            {/* @TODO: Hide the current active path */}
            {menu.map((mi) => (
              <li key={mi.label}>
                <a href={mi.path}>{mi.label}</a>
              </li>
            ))}
            <li><a className="external" href="https://www.linkedin.com/in/reidbrandon/" target="_blank">LinkedIn Profile</a></li>
            <li><a className="external" href="https://github.com/brandonreid" target="_blank">Github Profile</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
