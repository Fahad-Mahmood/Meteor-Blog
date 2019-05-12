import React, {Component} from 'react';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../api/posts';

class Admin extends Component {
  

  getUsers() {
    return  this.props.users.map((user,id) => {
        <li> {user.username} </li>
    });
  }
  render(){
    console.log(this.props.users);
    const users = this.props.users.map((i,k) => <li key={k}>{i.username}</li>);
return (
        <div>
            <h1>Users List</h1>
            <ul>
              {users}
            </ul>
        </div>
  
    );
  }
}

export default withTracker(() => {
    
  Meteor.subscribe('userData');
  return {
      users: Meteor.users.find({}).fetch(),
      currentUser: Meteor.user(),
  };
})(Admin);