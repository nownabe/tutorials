import Marked from 'marked'
import React from 'react'

export default class Comment extends React.Component {
  render() {
    var rawMarkup = Marked(this.props.children.toString(), {sanitize: true});
    return(
      <div className='comment'>
        <h3 className='commentAuthor'>
          {this.props.author}
        </h3>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
}
