import React from 'react';
import { Router, Route, Switch } from 'react-router';
import History from 'history';

// route components
import BlogHome from '../../ui/BlogHome.jsx';
import Login from '../../ui/Login.jsx';
import SignUp from '../../ui/SignUp.jsx';
import Blog from '../../ui/Blog.jsx';
import Admin from '../../ui/Admin.jsx';
import NotFoundPage from '../../ui/NotFoundPage.jsx';
import AddBlog from '../../ui/AddBlog.jsx';

const browserHistory = History.createBrowserHistory();


//setting up routes for the application using react router
export const renderRoutes = () => (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={BlogHome}/>
            <Route exact path="/blog" component={BlogHome}/>
            <Route exact path="/blog/:id" component={Blog}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route exact path="/admin/users" component={Admin}/>
            <Route exact path="/add" component = {AddBlog} />
            <Route component={NotFoundPage}/>
        </Switch>
    </Router>
);