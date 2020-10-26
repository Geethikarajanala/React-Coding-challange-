import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Search from '../users/Search'

const styles={
  align: 'left',
}
const Navbar = ({ icon, title }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {'   '}
        {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/followers">Followers</Link>
        </li>
        <li>
       <Search/>
        </li>
        </ul>
    </div>
    
  );
};
Navbar.defaultProps = {
  icon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
