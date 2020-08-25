import React from 'react';
import PropTypes from 'prop-types';

const CardSwitcher = ({ id, switchCard }) => (
  <ul className="theme-swither">
    <li>
      <a
        className={id === 1 ? "chosen" : "default"}
        onClick={(e) => switchCard(1, e)}>
        1枚目
      </a>
    </li>
    <li>
      <a
        className={id === 2 ? "chosen" : "default"}
        onClick={(e) => switchCard(2, e)}>
        2枚目
      </a>
    </li>
  </ul>
);

Comment.propTypes = {
  switchCard: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
}

Comment.defaultProps = {
  id: 1,
}

export default CardSwitcher;