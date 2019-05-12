import React, { Component } from 'react';
import {  Card, CardText, CardBody,CardHeader, CardSubtitle, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class BlogList extends Component {

    onDelete(){
        Meteor.call('post.remove', this.props.id);
    }

    render() {
        //trimming the blog description for the main page
        const description = this.props.text.slice(0,600);
        return (
            <div>
                <Card className="card bg-light mb-3">
                    <CardHeader><strong>{this.props.title}</strong></CardHeader>
                    <CardBody>
                    <CardSubtitle>
                    <button className="delete" onClick={this.onDelete.bind(this)}>&times;</button>
                    <span>create date: <strong>{this.props.date}</strong></span>
                    </CardSubtitle>
                    <CardText>
                        {description}
                        <Link to= {`/blog/${this.props.id}`} style={{ textDecoration: 'none', color:'black' }}>
                        <span className="readLink">... Read More </span>
                        </Link>
                        </CardText>
                    </CardBody>
                </Card>
            
            </div>
        );
    }   
} 