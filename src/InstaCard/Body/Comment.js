import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const CommenterName = styled.a({
}, ({ theme }) => {
  let darkMode = []
  if(theme === 'dark') {
    darkMode.push({ color: '#999' })
  }
  return darkMode;
})

const Comment = ({ theme, username, comment }) => (
  <li className="poster-comment">
    <CommenterName theme={theme}>
      {username}
    </CommenterName>
    <span className="commenter-comment">
      {comment}
    </span>
  </li>
);

Comment.propTypes = {
  theme: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
}

Comment.defaultProps = {
  theme: "light",
  username: "testuser",
  comment: "テストのコメント",
}

export default Comment;
