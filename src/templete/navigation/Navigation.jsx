import React from 'react';
import { Link } from 'react-router-dom';
import { NavigationWrapper, NavigationItemWrapper, NavigationItem } from './NavigationStyled';
// import PropTypes from 'prop-types';

const Navigation = () => (
  <NavigationWrapper>
    <NavigationItemWrapper>
      <NavigationItem>
        <Link to="/">Home</Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/atoms">Atoms</Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/molecules">Molecules</Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/organisms">Organisms</Link>
      </NavigationItem>
      <NavigationItem>
        <Link to="/todoList">To Do List</Link>
      </NavigationItem>
    </NavigationItemWrapper>
  </NavigationWrapper>
);

Navigation.defaultProps = {
};

Navigation.propTypes = {
};

export default Navigation;
