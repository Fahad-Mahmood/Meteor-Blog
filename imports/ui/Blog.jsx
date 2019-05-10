import React, { Component } from 'react';
import { Container, Card, CardText, CardBody,CardHeader,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

export default class Blog extends Component {


    render() {
        const blog = { _id: 1, title:'The Simple Reason Facebook Can’t Be Fixed', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' };
        return (
            <div className="container">
                <Container>
                    <Card className="card bg-light mb-3">
                        <CardHeader><strong>{blog.title}</strong></CardHeader>
                        <CardBody>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>
                            {blog.text}
                        </CardText>
                        </CardBody>
                    </Card>
                </Container>
            </div>
        );
    }
}