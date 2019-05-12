import React, { Component } from 'react';
import BlogList from './components/BlogList';
import {Container} from 'reactstrap';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../api/posts';
import { Meteor } from 'meteor/meteor';

class BlogHome extends Component {


  renderTasks() {
    return this.props.posts.map((blog) => (
      <BlogList key={blog._id} id= {blog._id} title ={blog.title} text={blog.text} date={blog.createdAt.toDateString()}  />
    ));
  }

  render() {
    const User = Meteor.user();
    console.log(this.currentUser);
    return (
      <div className="container">
        { this.props.currentUser ?
            <div>
              <header>
                  <h1>Welcome to Meteor Blog</h1>
              </header> 
              <Container>
                {this.renderTasks()}
              </Container>
            </div> : 
            <div>
                <h1>Please log in first:</h1> 
            </div>
        }
      </div>
    );
  }
}

export default withTracker(() => {

  Meteor.subscribe('posts');

  return {
    posts: Posts.find({}, { sort: { createdAt: -1 } }).fetch(),
    currentUser: Meteor.user(),

  };
})(BlogHome);