import React from 'react';
import './Header';
import { withRouter } from 'react-router-dom';
import './Header.css';

const Header = ({ history }) => {
  const path = history.location.pathname;
  const page = path.split('/').join('');
  return (
    <h1 className="main__header-text">
      {path === '/' ? 'zun-MERN-Boilerplate' : page}
    </h1>
  );
};

export default withRouter(Header);
