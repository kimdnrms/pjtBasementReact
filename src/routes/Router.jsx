import React, { BrowserRouter, Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../templete/header/Header';
import Navigation from '../templete/navigation/Navigation';
import SideBar from '../templete/sidebar/SideBar';
import Home from '../pages/home/Home';
import Atoms from '../pages/atomsPage/AtomsPage';

const Router = ({
  viewMode,
}) => (
  <BrowserRouter>
    <Header />
    {viewMode === 'navigation' ? (
      <Navigation />
    ) : (
      <SideBar />
    )}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/atoms" element={<Atoms />} />
      <Route path="/molecules" element={<span>molecules</span>} />
      <Route path="/organisms" element={<span>organisms</span>} />
      <Route path="/todoList" element={<span>to do list</span>} />
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>
);

Router.defaultProps = {
  viewMode: 'navigation',
};

Router.propTypes = {
  viewMode: PropTypes.string,
};

export default Router;
