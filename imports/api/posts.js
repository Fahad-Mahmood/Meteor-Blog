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
        return Posts.find({_id: new Mongo.ObjectID(id)});
    });
    
}