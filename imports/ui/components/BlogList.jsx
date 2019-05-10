import React, { Component } from 'react';
import { Container, Card, CardText, CardBody,CardHeader,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class BlogList extends Component {

    //redirect to the specific blog page
    changePath() {
        window.location = "blog/1";
    }
    render() {
        
        //trimming the blog description for the main page
        const description = this.props.text.slice(0,200);
        return (
            <div onClick= {this.changePath.bind(this)}>
                <Card className="card bg-light mb-3">
                    <CardHeader><strong>{this.props.title}</strong></CardHeader>
                    <CardBody>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                        {description}
                        <span className="readLink" onClick={this.changePath.bind(this)}>.. Read More </span>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }   
}