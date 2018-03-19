import React from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions'; 
import { Link } from 'react-router-dom';

class PostShow extends React.Component {

  componentDidMount() {
    if(!this.props.post) {
      const id = this.props.match.params.id;
      this.props.fetchPost(id);
    }
  }

  onDeleteClick() {
    const id = this.props.match.params.id;
    this.props.deletePost(id, () => {
      this.props.history.push('/');
    });
  }

  render() {

    if(!this.props.post) {
      return <div>LOADING...</div>
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <button onClick={ this.onDeleteClick.bind(this) } className="btn btn-danger pull-xs-right">Delete</button>
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

export default connect(mapStateToProps, { fetchPost: fetchPost, deletePost: deletePost })(PostShow);