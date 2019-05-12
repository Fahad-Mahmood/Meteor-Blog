import React, { Component } from 'react';
import { Container, Card, CardText, CardBody,CardHeader, Input,
        CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { withTracker } from 'meteor/react-meteor-data';
import { Posts } from '../api/posts';
import ReactDOM from 'react-dom'

class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
        this.updatePost = this.updatePost.bind(this);
    }
    //toggle modal
    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    //update post 
    updatePost(){
            // Find the post title and body field via the React ref
            const title= ReactDOM.findDOMNode(this.refs.title).value.trim();
            const body = ReactDOM.findDOMNode(this.refs.body).value.trim();

            Meteor.call('post.update', this.props.match.params.id, title, body ); 
            //closing modal
            this.toggle();
    }

    render() {
        return (
            <div className="container">
                <Container>
                {this.props.post.map((post,id) => (
                    <Card key={id} className="card bg-light mb-3">
                        <CardHeader><strong>{post.title}</strong></CardHeader>
                        <CardBody>
                        <CardSubtitle>
                            create date:<strong>{post.createdAt.toDateString()}</strong>
                            { this.props.currentUser ? 
                            <span className="update" onClick={this.toggle}>Update</span>
                            : '' }
                            <Modal isOpen={this.state.modal} toggle={this.toggle}>
                                <ModalHeader toggle={this.toggle}>
                                    <Input type="text" ref="title" name="title" defaultValue= {post.title} />
                                </ModalHeader>
                                <ModalBody>
                                    <Input type="textarea" ref="body" name="body" defaultValue= {post.text} />
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary"  onClick={this.updatePost}>Update</Button>{' '}
                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                            
                        </CardSubtitle>
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
    
    Meteor.subscribe('post', props.match.params.id);
    return {
        post: Posts.find({}).fetch(),
        currentUser: Meteor.user(),
    };
})(Blog);