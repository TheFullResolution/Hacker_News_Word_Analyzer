import React, { PropTypes } from 'react';

const Button = ({ ready, processing }) => {
  if (processing) {
    return (
      <div>
        <img src="images/hourglass.svg" alt="spinner" className="spinner" />
      </div>
    );
  } else if (!ready) {
    return (
      <button type="submit" className="button" disabled>
        Analyze!
      </button>
    );
  } else {
    return (
      <button type="submit" className="button">
        Analyze!
      </button>
    );
  }
};

Button.propTypes = {
  ready: PropTypes.bool,
  processing: PropTypes.bool
};
export default Button;
