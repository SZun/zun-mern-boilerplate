import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logoutUser } from '../../store/actions/authActions';
import PropTypes from 'prop-types';
import asyncComponent from '../../utils/asyncComponent';
import './NavBar.css';

const NavBarItem = asyncComponent(() => import('./NavBarItem/NavBarItem'));

class NavBar extends Component {
  render() {
    const { auth, history, logoutUser } = this.props;
    const navVals = auth.isAuthenticated
      ? [
          {
            to: 'page-1',
            icon: 'face'
          },
          {
            to: 'page-2',
            icon: 'work'
          }
        ]
      : [
          {
            to: '',
            icon: 'home'
          }
        ];

    const navContent = navVals.map(i => (
      <NavBarItem to={i.to} key={i.to} icon={i.icon} />
    ));
    return (
      <div className="navbar__main">
        <ul>
          {navContent}
          {auth.isAuthenticated ? (
            <div>
              <div className="navbar__main-item">
                <hr />
                <li
                  onClick={() => logoutUser(history)}
                  className="navbar__main-item-li"
                >
                  <i className="material-icons" waves="light">
                    reply
                  </i>
                </li>
                <hr />
              </div>
            </div>
          ) : null}
        </ul>
      </div>
    );
  }
}

NavBar.propTypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(withRouter(NavBar));
