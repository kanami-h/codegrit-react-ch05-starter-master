import React from 'react';
import Avatar from '../images/avatar-one.png';
import PropTypes from 'prop-types';

const Header = ({ data }) => (
  <section className="card-header">
    <div className="poster-avatar">
      <img alt="アバター" src={data.posterAvatar} />
    </div>
    <div className="poster-name">
      {data.poster}
    </div>
  </section>
);

Header.propTypes = {
  data: PropTypes.object
}

Header.defaultProps = {
  data: {
    posterAvatar: Avatar,
    poster: "testposter"
  }
}

export default Header;