import React from 'react';

const ProtectedPortContent = () => {
  const yo = 'yo';
  return (
    <div className="ppc">
      <div className="ppc_intro-hero">
        <div className="ppc_intro-hero_msg">
          <h1>Hi!</h1>
          <p>
            Thanks for your interest in my work. Here are a few stories of how I've approached
            software challenges and the lessons they taught me. Enjoy.
          </p>
          <p className="ppc_intro-hero_nda">
            This work is password protected out of respect for the clients it served. Please don't
            share any of the images or any details that might be considered trade secrets. I've
            taken precautions to ensure no individual's personal information is displayed, it's
            purely focussed on my work and process. Thanks!
          </p>
        </div>
        <div className="ppc_intro-hero_contact"></div>
      </div>
    </div>
  );
};

export default ProtectedPortContent;
