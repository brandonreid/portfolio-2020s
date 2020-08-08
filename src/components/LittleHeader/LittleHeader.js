import React from 'react';

const LittleHeader = () => {
  const yo = 'yo';

  return (
    <div className="shared-nav-wrapper">
      <a className="brandon" href="/">BRANDON REID</a>
      <div className="container">
        <svg
          className="octogon"
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
          <a href="/">Portfolio</a>
        </nav>
      </div>
    </div>
  );
};

export default LittleHeader;
