import React from 'react'

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="comment">
        <h3 className="commentAuthor">
          {this.props.author}
        </h3>
        {this.props.children}
      </div>
    );
  }
}
