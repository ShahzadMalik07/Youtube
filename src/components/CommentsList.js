import React from 'react'
import Comment from './Comment'

const CommentsList = ({ comments }) => {

  return comments.map((comment, index) =>
    <div key={index}>
      <Comment key={index} data={comment} />
    
      <div className='ml-8'>
      {comment.replies?.length > 0 && <CommentsList key={index} comments={comment.replies} />}

      </div>
    </div>
  )


}

export default CommentsList
