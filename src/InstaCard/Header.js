import React from 'react';
import Avatar from '../images/avatar-one.png';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const HeaderStyle = styled.section({
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #efefef',
  padding: '16px',
  height: '60px',
})

const PosterAvatar = styled.div({
  marginRight: '12px'
})

const PosterAvatarImg = styled.img({
  borderRadius: '50%',
  border: '1px solid #dddddd',
  height: '30px',
  width: '30px',
})


const Header = ({ data }) => {
  return (
    <HeaderStyle>
      <PosterAvatar>
        <PosterAvatarImg alt="アバター" src={data.posterAvatar} />
      </PosterAvatar>
      <div className="poster-name">
        {data.poster}
      </div>
    </HeaderStyle>
  )
}

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