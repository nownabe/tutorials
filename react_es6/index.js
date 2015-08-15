import React from 'react'
import CommentBox from './components/CommentBox'

React.render(
  <CommentBox url="comments.json" />,
  document.getElementById('container')
);
