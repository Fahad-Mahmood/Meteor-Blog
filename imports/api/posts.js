import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check'; 

export const Posts = new Mongo.Collection('posts');

if (Meteor.isServer) {
    // This code only runs on the server
        Meteor.publish('posts', function postsPublication() {
        return Posts.find();
    });

    Meteor.publish('post', function (id) {
        return Posts.find({_id: id});
    });
    
    Meteor.publish('userData', function () {
        return  Meteor.users.find();
    });
    
}
Meteor.methods({
    
    'post.insert'(title,text) {
        check(text, String);
        check(title,String);

    Posts.insert({
        title,
        createdAt: new Date(),
        text, 
    });
    },
    //remove post
    'post.remove'(postId) {
        
        check(postId, String);
        Posts.remove(postId);
    },
    'post.update'(postId, title, text) {
        
        check(postId, String);
        check(title, String);
        check(text,String);

        Posts.update(postId, { $set: { title , text } });
    },
});