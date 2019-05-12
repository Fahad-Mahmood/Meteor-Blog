import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom'
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';


export default class AddBlog extends Component {

    onSubmit(e) {
        e.preventDefault();
        // Find the post title and body field via the React ref
        const title = ReactDOM.findDOMNode(this.refs.title).value.trim();
        const text = ReactDOM.findDOMNode(this.refs.body).value.trim();
        Meteor.call('post.insert', title, text);
        window.location.replace('/blog');
        
    }

    render() {
        
        return(
            
            //Form for adding blog posts
            <Form onSubmit={this.onSubmit.bind(this)}>
                <FormGroup>
                    <Label for="exampleTitle">Title</Label>
                    <Input type="text" ref="title" name="title" placeholder="Post Title" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleBody">Post Body</Label>
                    <Input type="text" ref="body" name="body"  placeholder="Post Body" />
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
}