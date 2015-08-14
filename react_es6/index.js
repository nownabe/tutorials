import React from 'react'

class CommentBox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="CommentBox">
        Hello, world! I am a CommentBox.
      </div>
    );
  }
}

React.render(
  <CommentBox />,
  document.getElementById('container')
);
