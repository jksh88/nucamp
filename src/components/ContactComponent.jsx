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
  FormFeedback,
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
  touched: {
    firstName: false,
    lastName: false,
    phoneNumber: false,
    email: false,
  },
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

  const validate = (firstName, lastName, phoneNumber, email) => {
    const errors = {};
    if (state.touched.firstName) {
      if (firstName.length < 2) {
        errors.firstName = 'First name cannot be less than two characters';
      } else if (firstName.length > 20) {
        errors.firstName = 'First name cannot be longer than twenty characters';
      }
    }
    if (state.touched.lastName) {
      if (lastName.length < 2) {
        errors.lastName = 'Last name cannot be less than two characters';
      } else if (firstName.length > 20) {
        errors.lastName = 'Last name cannot be longer than twenty characters';
      }
    }
    if (state.touched.phoneNumber) {
      const phoneReg = /^\d{10}$/;
      if (!phoneReg.test(phoneNumber)) {
        errors.phoneNumber = 'Enter ten digit phone number including area code';
      }
    }
    if (state.touched.email) {
      const emailReg = /^\w+@\w+\.\w{2,}$/;
      if (!emailReg.test(email)) {
        errors.email = 'Enter a valid email';
      }
    }
    return errors;
  };

  const handleBlur = (evt) =>
    setState((curState) => ({
      ...curState,
      touched: { ...curState.touched, [evt.target.name]: true },
    }));
  const { firstName, lastName, phoneNumber, email } = state;
  const errors = validate(firstName, lastName, phoneNumber, email);
  console.log('ERRORS: ', errors);
  //Q: what's the order of execution for this validate invocation?
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
                  onBlur={handleBlur}
                />
                <FormFeedback>{errors.firstName}</FormFeedback>
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
                  onBlur={handleBlur}
                />
                <FormFeedback>{errors.lastName}</FormFeedback>
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
                  onBlur={handleBlur}
                />
                <FormFeedback>{errors.phoneNumber}</FormFeedback>
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
                  onBlur={handleBlur}
                />
              </Col>
              <FormFeedback>{errors.email}</FormFeedback>
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
