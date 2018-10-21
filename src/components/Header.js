// Vendor
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="navbar navbar-default navbar-fixed-top navbar-inverse">
    <div className="navbar-header">
      <button type='button' className='btn btn-default navbar-btn'><Link to='/'>Home</Link></button>
      <button type='button' className='btn btn-default navbar-btn'><Link to='/exercise1'>Exercise1</Link></button>
      <button type='button' className='btn btn-default navbar-btn'><Link to='/exercise2'>Exercise2</Link></button>
    </div>
  </div>
);

export default Header;
