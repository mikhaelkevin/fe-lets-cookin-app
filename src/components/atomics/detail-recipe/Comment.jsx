import React from 'react';
import PropTypes from 'prop-types';

function Comment({ data: { username, comment } }) {
  return (
    <div className="col-lg-11 col-sm-10 col-9 ps-lg-4">
      <p>{username}</p>
      <span>
        {comment}
      </span>
    </div>
  );
}

Comment.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string,
    comment: PropTypes.string,
  }),
};

Comment.defaultProps = {
  data: {
    username: 'John Doe',
    comment: 'Default comment',
  },
};

export default Comment;
