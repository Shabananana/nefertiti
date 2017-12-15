import React from 'react';
import PropTypes from 'prop-types';

const EmblemPortrait = ({ content, randomInt }) => {
  function getRandomInt(min, max) {
    const roundedMin = Math.ceil(min);
    const roundedMax = Math.floor(max);
    return Math.floor(randomInt * (roundedMax - roundedMin)) + roundedMin;
  }

  const inlineStyle = {
    height: getRandomInt(100, 300),
  };

  return (
    <article
      className="emblem-portrait"
      style={inlineStyle}
    >
      <span>{content}</span>
    </article>
  );
};

EmblemPortrait.propTypes = {
  content: PropTypes.string.isRequired,
  randomInt: PropTypes.number.isRequired,
};

export default EmblemPortrait;
