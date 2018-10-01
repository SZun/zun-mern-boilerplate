import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser, logoutUser } from '../../store/actions/authActions';
import { withRouter } from 'react-router-dom';
import store from '../../store';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../../axios/setAuthToken';
import PropTypes from 'prop-types';
import asyncComponent from '../../utils/asyncComponent';

const NavBar = asyncComponent(() => import('../../components/NavBar/NavBar'));
const Header = asyncComponent(() => import('../../components/Header/Header'));
const Footer = asyncComponent(() => import('../../components/Footer/Footer'));

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode tokent and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Clear current token
    localStorage.removeItem('jwtToken');
    // Logout user
    store.dispatch(logoutUser(this.props.history));
  }
}

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <main>{this.props.children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

Layout.propTypes = {
  setAuthToken: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  setCurrentUser: PropTypes.func.isRequired
};

export default connect(
  null,
  { setAuthToken, setCurrentUser, logoutUser }
)(withRouter(Layout));
