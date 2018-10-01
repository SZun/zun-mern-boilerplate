import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NavBarItem.css';

const NavBarItem = ({ icon, to }) => (
  <div className="navbar__main-item">
    <hr />
    <li>
      <Link to={`/${to}`}>
        <i className="material-icons" waves="light">
          {icon}
        </i>
      </Link>
    </li>
    <hr />
  </div>
);

NavBarItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default NavBarItem;
