import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import styled from '@emotion/styled';

const CommentsStyle = styled.ul`
  margin-bottom: 4px;
  & li > a {
    margin-right: .3em;
  }
`


const Comments = ({ data }) => {
  const { commentOne, commentTwo } = data;
  return (
    <CommentsStyle>
      <Comment
        username={commentOne.poster}
        comment={commentOne.body} />
      <Comment
        username={commentTwo.poster}
        comment={commentTwo.body} />
    </CommentsStyle>
  );
};

Comments.propTypes = {
  data: PropTypes.object
}

Comments.defaultProps = {
  data: {
    commentOne: {
      poster: "posterone",
      body: "This is the insta-card"
    },
    commentTwo: {
      poster: "postertwo",
      body: "So cool!"
    }
  }
}


export default Comments;