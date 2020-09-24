import React from 'react';
import PropTypes from 'prop-types';
import HeartImg from '../../images/heart.png';
import HeartImgDark from '../../images/heart-gray.png';
import BubbleImg from '../../images/bubble.png';
import BubbleImgDark from '../../images/bubble-gray.png';
import BookmarkImg from '../../images/bookmark.png';
import BookmarkImgDark from '../../images/bookmark-gray.png';
import styled from '@emotion/styled';

const CardMainIcons = styled.div`
  margin-top: 4px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > ul > li {
    margin-right: 5px;
  }
`
  
const FlexContainer = styled.ul`
  display: flex;
`

const MainIcons = ({ theme }) => (
  <CardMainIcons>
    <FlexContainer>
      <li className="icon-heart">
        <img
          alt="heart-icon"
          src={theme === 'light' ? HeartImg : HeartImgDark}
          height="30px"/>
      </li>
      <li className="icon-comment">
        <img 
          alt="bubble-icon"
          src={theme === 'light' ? BubbleImg : BubbleImgDark}
          height="30px"/>
      </li>
    </FlexContainer>
    <FlexContainer>
      <li className="icon-bookmark icons-right">
        <img 
          alt="bookmark-icon"
          src={theme === 'light' ? BookmarkImg : BookmarkImgDark}
          height="30px"/>
      </li>
    </FlexContainer>
  </CardMainIcons>
);

Comment.propTypes = {
  theme: PropTypes.string.isRequired
}

Comment.defaultProps = {
  theme: "light",
}

export default MainIcons;