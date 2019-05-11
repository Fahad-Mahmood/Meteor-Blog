import React, { Component } from 'react';
import { Container, Card, CardText, CardBody,CardHeader,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import { Redirect,Link } from 'react-router-dom';

export default class BlogList extends Component {


    render() {

        //trimming the blog description for the main page
        const description = this.props.text.slice(0,200);
        return (
            <div>
                <Link to= {`/blog/${this.props.id.valueOf()}`} style={{ textDecoration: 'none', color:'black' }}>
                <Card className="card bg-light mb-3">
                    <CardHeader><strong>{this.props.title}</strong></CardHeader>
                    <CardBody>
                    <CardSubtitle>create date: {this.props.date}</CardSubtitle>
                    <CardText>
                        {description}
                        <span className="readLink"> Read More... </span>
                        </CardText>
                    </CardBody>
                </Card>
                </Link>
            </div>
        );
    }   
} 