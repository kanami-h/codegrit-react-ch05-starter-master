import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const Comments = ({ data }) => {
  const { commentOne, commentTwo } = data;
  return (
    <ul className="comments">
      <Comment
        username={commentOne.poster}
        comment={commentOne.body} />
      <Comment
        username={commentTwo.poster}
        comment={commentTwo.body} />
    </ul>
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