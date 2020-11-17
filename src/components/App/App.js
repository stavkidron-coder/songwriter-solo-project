import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

// import AboutPage from '../AboutPage/AboutPage';
import HomePage from '../HomePage/HomePage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import InTheWorks from '../InTheWorks/InTheWorks';
import AddEditSongPage from '../Add-EditSongPage/Add-EditSongPage';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' });
  }

  render() {
    return (
     
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/landing-page */}
            <Redirect exact from="/" to="/landing-page" />

            {/* Visiting localhost:3000/about will show the about page. */}
            {/* <Route */}
              {/* // shows AboutPage at all times (logged in or not)
              // exact
              // path="/about"
              // component={AboutPage}
            // /> */}

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the HomePage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows HomePage else shows LoginPage
              exact
              path="/home"
              component={HomePage}
            />

            

            {/* When a value is supplied for the authRedirect prop the user will
            be redirected to the path supplied when logged in, otherwise they will
            be taken to the component and path supplied. */}
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows LoginPage at /login
              exact
              path="/login"
              component={LoginPage}
              authRedirect="/home"
            />
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/user"
              // - else shows RegisterPage at "/registration"
              exact
              path="/registration"
              component={RegisterPage}
              authRedirect="/home"
            />
            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/landing-page"
              // - else shows LandingPage at "/home"
              exact
              path="/landing-page"
              component={LandingPage}
              authRedirect="/home"
            />

            <ProtectedRoute
              // with authRedirect:
              // - if logged in, redirects to "/edit-song"
              // - else shows LandingPage at "/home"
              exact
              path="/edit-song"
              component={AddEditSongPage}
              // authRedirect="/home"
            />

            <ProtectedRoute
              // logged in shows In-The-Works page else shows LoginPage
              exact
              path="/in-the-works"
              component={InTheWorks}
              // authRedirect="/home"
            />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>

          <Footer />
          
        </div>
      </Router>
    );
  }
}

export default connect()(App);
