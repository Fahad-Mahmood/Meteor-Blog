import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom'
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Accounts } from 'meteor/accounts-base'

export default class Login extends Component {

    onSubmit(e) {
        
      e.preventDefault();
      
        // Find the post title and body field via the React ref
        const username= ReactDOM.findDOMNode(this.refs.username).value.trim();
        const password = ReactDOM.findDOMNode(this.refs.password).value;

        
        //signup using accounts
        const user = Meteor.user();
        Meteor.loginWithPassword({username}, password);
      
        if(Meteor.user()) {
          alert('you are logged in ' + user.username);
        }
      
        
    }

    render() {
        
        return(
            
            //Form for adding blog posts
            <Form onSubmit={this.onSubmit.bind(this)}>
                <FormGroup>
                    <Label for="exampleTitle">username</Label>
                    <Input type="text" ref="username" name="username" placeholder="Username" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleBody">Password</Label>
                    <Input type="password" ref="password" name="password"  placeholder="Password" />
                </FormGroup>
                <Button type="submit">Login</Button>
            </Form>
        );
    }
}