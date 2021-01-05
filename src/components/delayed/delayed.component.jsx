import React from 'react';
import PropTypes from 'prop-types';

function Delayed({waitBeforeShow, children}) {
  const [hidden, setHidden] = React.useState(true);

  React.useEffect(() => {
    const delay = setTimeout(() => setHidden(false), waitBeforeShow);
    return () => clearTimeout(delay);
  }, [waitBeforeShow]);

  return hidden ? null : children;
}

Delayed.propTypes = {
  waitBeforeShow: PropTypes.number.isRequired,
};

export default Delayed;
