import React, { Component } from 'react';
import { Container, Card, CardText, CardBody,CardHeader,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../api/posts';
import { Mongo } from 'meteor/mongo'

class Blog extends Component {

    constructor(props) {
        super(props);
}

    render() {

        return (
            <div className="container">
                <Container>
                {this.props.post.map((post,id) => (
                    <Card key={id} className="card bg-light mb-3">
                        <CardHeader><strong>{post.title}</strong></CardHeader>
                        <CardBody>
                        <CardSubtitle>Publishing Date:{post.createdAt.toDateString()}</CardSubtitle>
                        <CardText>
                            {post.text}
                        </CardText>
                        </CardBody>
                    </Card>
                ))}
                </Container>
            </div>
        );
    }
}

export default withTracker((props) => {
    console.log(props.match.params.id);

    Meteor.subscribe('post', props.match.params.id);
    return {
        post: Posts.find({}).fetch(),
    };
})(Blog);