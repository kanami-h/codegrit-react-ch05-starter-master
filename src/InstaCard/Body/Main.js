import React from 'react';
import PropTypes from 'prop-types';
import MainIcons from './MainIcons';
import Comments from './Comments';
import CommentBox from './CommentBox'
import styled from '@emotion/styled';

const CardMain = styled.section({
  padding: '0 16px'
})

const PostDate = styled.div({
  marginBottom: '4px',
  fontSize: '10px',
  letterSpacing: '.2px',
  color: '#999',
  marginBottom: '5px',
  textTransform: 'uppercase',
})

const LikeCounts = styled.div({
  fontWeight: 'bold',
  marginBottom: '8px',
})

const BodyMain = ({ theme, chosenId, data }) => (
  <CardMain>
    <MainIcons theme={theme} />
    <LikeCounts>100 likes</LikeCounts>
    <Comments data={data} />
    <PostDate>1日前</PostDate>
    <CommentBox chosenId={chosenId} />
  </CardMain>
);

Comment.propTypes = {
  theme: PropTypes.string.isRequired,
  chosenId: PropTypes.number.isRequired
}

Comment.defaultProps = {
  theme: "light",
  chosenId: 1,
}

export default BodyMain;