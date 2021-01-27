import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Directory from './components/DirectoryComponent';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <NavbarBrand href="/">nucamp</NavbarBrand>
      </Navbar>
      <div className="container">
        <Directory />
      </div>
    </div>
  );
}

export default App;
