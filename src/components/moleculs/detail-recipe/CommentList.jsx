import React from 'react';
import { commentUserDummy } from '../../../utils/data';
import Avatar from '../../atomics/detail-recipe/Avatar';
import Comment from '../../atomics/detail-recipe/Comment';

function CommentList() {
  return (
    <>
      <h1>Comment</h1>
      {commentUserDummy?.map((item, index) => {
        const commentKey = index + 1;
        return (
          <div className="row mb-5" key={commentKey}>
            <Avatar data={{ image: item?.image, title: `avatar-${commentKey}` }} />
            <Comment data={{ username: item?.username, comment: item?.comment }} />
          </div>
        );
      })}
    </>
  );
}

export default CommentList;
