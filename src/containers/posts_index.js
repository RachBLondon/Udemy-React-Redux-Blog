import React, { Component } from 'react';
import { connect  } from 'react-redux';
import { Link } from 'react-router';
import { fetchPosts } from '../actions/index';


class PostsIndex extends Component {
  componentWillMount(){
    this.props.fetchPosts();
  }

  renderPosts(){
    return this.props.posts.map((post)=> {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/"+post.id}>
            <span className='pull-xs-right'> {post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });
  }


  render(){
    console.log("Index State",this.state);
    console.log("Index Props", this.props);
    return(
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-info">
            Add a post
          </Link>
        </div>
          <h3>Posts</h3>
          <ul className="list-group">
            {this.renderPosts()}
          </ul>
      </div>
    );
  }
}

// removed this  as usinh object as second argument instead of mapDispatchToProps
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ fetchPosts }, dispatch);
// }

function mapStateToProps(state){
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts: fetchPosts })(PostsIndex);

//{ fetchPosts: fetchPosts } is the same as { fetchPosts } in ES6
