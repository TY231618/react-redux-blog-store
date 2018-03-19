import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions'; 

class PostShow extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
  }

  render() {

    if(!this.props.post) {
      return <div>LOADING...</div>
    }
    
    return (
      <div>
        <h3>{ this.props.post.title }</h3>
        <h6>{ this.props.post.categories }</h6>
        <p>{ this.props.post.content }</p>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {

  return {
    post: state.posts[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchPost: fetchPost })(PostShow);