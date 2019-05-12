import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { Accounts } from 'meteor/accounts-base'

export default class SignUp extends Component {

    onSubmit(e) {
        
      e.preventDefault();
      
        // Retrieve user info from fields via the React ref
        const username= ReactDOM.findDOMNode(this.refs.username).value.trim();
        const email = ReactDOM.findDOMNode(this.refs.email).value.trim();
        const password = ReactDOM.findDOMNode(this.refs.password).value;

        
        //signup using accounts

        Accounts.createUser({username,email,password}, (err) => {
            alert(err);
        }); 
        
        if(Meteor.user()) {
          window.location.replace('/blog');
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
                    <Label for="exampleBody">Email</Label>
                    <Input type="email" ref="email" name="email"  placeholder="Email" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleBody">Password</Label>
                    <Input type="password" ref="password" name="password"  placeholder="Password" />
                </FormGroup>
                <Button type="submit">Sign Up</Button>
            </Form>
        );
    }
}