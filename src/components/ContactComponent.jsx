import React, { useState } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
} from 'reactstrap';
import { Link } from 'react-router-dom';

const initialState = {
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  agree: false,
  contactType: 'By phone',
  feedback: '',
};

const Contact = (props) => {
  const [state, setState] = useState(initialState);

  const handleInputChange = (evt) => {
    let { name, value, checked } = evt.target;
    value = evt.target.type === 'checkbox' ? checked : value;
    setState((curState) => ({ ...curState, [name]: value }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    alert('Current state is: ' + JSON.stringify(state));
    console.log('Current state is: ' + JSON.stringify(state));
    setState(initialState);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>

            <BreadcrumbItem active>Contact us</BreadcrumbItem>
          </Breadcrumb>
          <h2>Contact Us</h2>
          <hr />
        </div>
      </div>

      <div className="row row-content align-items-center">
        <div className="col-sm-4">
          <h5>Our Address</h5>
          <address>
            1 Nucamp Way
            <br />
            Seattle, WA 98001
            <br />
            U.S.A.
          </address>
        </div>
        <div className="col">
          <a role="button" className="btn btn-link" href="tel:+12065551234">
            <i className="fa fa-phone" /> 1-206-555-1234
          </a>
          <br />
          <a
            role="button"
            className="btn btn-link"
            href="mailto:fakeemail@fakeemail.co"
          >
            <i className="fa fa-envelope-o" /> campsites@nucamp.co
          </a>
        </div>
      </div>

      <div className="row row-content">
        <div className="col-12">
          <h2>Send us your feedback</h2>
          <hr />
        </div>
        <div className="col-md-10">
          <Form onSubmit={handleSubmit}>
            <FormGroup row>
              <Label htmlFor="firstName" md={2}>
                First Name
              </Label>
              <Col md={10}>
                <Input
                  id="firstName"
                  type="text"
                  name="firstName"
                  value={state.firstName}
                  placeholder="your first name"
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="lastName" md={2}>
                Last Name
              </Label>
              <Col md={10}>
                <Input
                  id="lastName"
                  type="text"
                  name="lastName"
                  value={state.lastName}
                  placeholder="your last name"
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="phoneNumber" md={2}>
                Phone Number
              </Label>
              <Col md={10}>
                <Input
                  id="phoneNumber"
                  type="tel"
                  name="phoneNumber"
                  value={state.phoneNumber}
                  placeholder="your phone number"
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  value={state.email}
                  placeholder="your email"
                  onChange={handleInputChange}
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 4, offset: 2 }}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      checked={state.agree}
                      name="agree"
                      onChange={handleInputChange}
                    />
                    You may contact me
                  </Label>
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Input
                    id="contactType"
                    type="select"
                    name="contactType"
                    value={state.contactType}
                    onChange={handleInputChange}
                  >
                    <option>By Phone</option>
                    <option>By Email</option>
                  </Input>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label md={2}>Your feedback</Label>
              <Col md={10}>
                <Input
                  type="textarea"
                  value={state.feedback}
                  name="feedback"
                  onChange={handleInputChange}
                  row="10"
                />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 4, offset: 2 }}>
                <Button type="submit" color="primary">
                  Submit
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
