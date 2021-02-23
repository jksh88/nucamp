import React, { Component } from 'react';
import {
  Jumbotron,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { baseUrl } from '../shared/baseUrl';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };
  }

  toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });

  toggleNav = () =>
    this.setState((curState) => ({ isNavOpen: !curState.isNavOpen }));

  handleLogin = (evt) => {
    this.toggleModal();
    alert(
      `Username: ${this.username.value} Remember: ${this.remember.checked}`
    );
    // evt.preventDefault();
  };
  //Q: Why when I don't use evt.preventDefault(), modal closese when alert is closed? If I use it, it doesn't until I manually close the it.
  render() {
    return (
      <>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>nucamp</h1>
                <h2>a better way to camp</h2>
              </div>
            </div>
          </div>
        </Jumbotron>

        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img
                src={`${baseUrl}/images/logo.png`}
                alt="nucamp-logo"
                height="30"
                width="30"
              />
              nucamp
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg" />
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/directory">
                    <i className="fa fa-list fa-lg" />
                    Directory
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <i className="fa fa-info fa-lg" />
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <i className="fa fa-address-card fa-lg" />
                    Contact us
                  </NavLink>
                </NavItem>
              </Nav>
              <span className="navbar-text ml-auto">
                <Button outline onClick={this.toggleModal}>
                  <i className="fa fa-sign-in fa-lg" />
                </Button>
              </span>
            </Collapse>
          </div>
        </Navbar>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleLogin}>
              <FormGroup>
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  id="username"
                  innerRef={(input) => (this.username = input)}
                  name="username"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  innerRef={(input) => (this.password = input)}
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="remember"
                    innerRef={(input) => (this.remember = input)}
                  />
                  Remember me
                </Label>
              </FormGroup>
              <Button type="submit" value="submit" color="primary">
                Sign me in
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </>
    );
  }
}
//Q: Why is the value="submit" necessary in Button?

export default Header;
