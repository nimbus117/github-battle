import React from 'react';
import ThemeContext from '../contexts/theme';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const activeStyle = {
  color: 'rgb(187,46,31)',
};

const Nav = ({ toggleTheme }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <nav className="row space-between">
      <ul className="row nav">
        <li>
          <NavLink to="/" exact activeStyle={activeStyle} className="nav-link">
            Popular
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/battle"
            exact
            activeStyle={activeStyle}
            className="nav-link"
          >
            Battle
          </NavLink>
        </li>
      </ul>
      <button
        style={{ fontSize: 30 }}
        className="btn-clear"
        onClick={toggleTheme}
      >
        {theme === 'light' ? '🔦' : '💡'}
      </button>
    </nav>
  );
};

Nav.propTypes = {
  toggleTheme: PropTypes.func.isRequired,
};

export default Nav;
