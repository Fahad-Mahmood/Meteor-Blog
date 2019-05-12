import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base'

Meteor.methods({
    //Method to register a user using accounts password Api

    'register.user'(user) {

         // If this is the first user going into the database, make them an admin
        if (Meteor.users.find().count() === 0) {
        
        }
        //creating user
        Accounts.createUser({username:user.username,email:user.email,password:user.password}, (err) => {
            return err.reason;
        });
        
    },
});