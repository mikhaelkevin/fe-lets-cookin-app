import React from 'react';

function CommentForm() {
  return (
    <form>
      <textarea className="bg-light" name="commentBox" id="commentBox" placeholder="Comment:" />
      <button type="submit" className="btn btn-warning text-light btn-lg justify-content-center">
        Send
      </button>
    </form>
  );
}

export default CommentForm;
