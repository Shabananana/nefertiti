import React from 'react';

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo-shape">
        <div className="top-triangles">
          <div className="triangle-one" />
          <div className="triangle-two" />
          <div className="triangle-three" />
        </div>
        <div className="bottom-triangles">
          <div className="triangle-four" />
        </div>
      </div>
      <div className="logo-copy">
        <span className="pale-yellow char1">N</span>
        <span className="deep-pink char2">F</span>
        <span className="lime-green char3">R</span>
        <span className="dark-purple char4">T</span>
        <span className="dark-orange char5">T</span>
      </div>
    </div>
  );
};

export default Logo;
