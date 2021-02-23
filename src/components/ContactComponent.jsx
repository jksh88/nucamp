import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Label,
  Col,
  Row,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors, actions } from 'react-redux-form';
import { render } from '@testing-library/react';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;
const validPhoneNumber = (val) => /^[0-9]+$/.test(val);
const validEmail = (val) =>
  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(val);

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

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleSubmit = (values) => {
    this.props.postFeedback(values);
    this.props.resetFeedbackForm();
  };
  //Q: How are the values in the form saved into the store if handleSubmit doesn't handle that and there is no reducer for handling feedback?
  //In <Form> don't forget to put in model="....". This is to link the form values with the redux store.
  render() {
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
            <Form
              model="feedbackForm"
              onSubmit={(values) => this.handleSubmit(values)}
            >
              <Row className="form-group">
                <Label htmlFor="firstName" md={2}>
                  First Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".firstName"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(20),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".firstName"
                    show="touched"
                    // component="div"
                    messages={{
                      required: 'Required',
                      minLength: 'Must be at least 2 characters',
                      maxLength: 'Must be 20 characters or less',
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="lastName" md={2}>
                  Last Name
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".lastName"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    validators={{
                      required,
                      minLength: minLength(2),
                      maxLength: maxLength(20),
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".lastName"
                    show="touched"
                    component="div"
                    messages={{
                      required: 'Required',
                      minLength: 'Must be at least 2 characters',
                      maxLength: 'Must be 20 characters or less',
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="phoneNumber" md={2}>
                  Phone Number
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".phoneNumber"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    validators={{
                      required,
                      validPhoneNumber,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".phoneNumber"
                    show="touched"
                    component="div"
                    messages={{
                      required: 'Required',
                      validPhoneNumber:
                        'Enter your seven digits without () or -',
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="email" md={2}>
                  Email
                </Label>
                <Col md={10}>
                  <Control.text
                    model=".email"
                    className="form-control"
                    id="email"
                    name="email"
                    validators={{
                      required,
                      validEmail,
                    }}
                  />
                  <Errors
                    className="text-danger"
                    model=".email"
                    show="touched"
                    component="div"
                    messages={{
                      required: 'Required',
                      validEmail: 'Invalid email address',
                    }}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 4, offset: 2 }}>
                  <div className="form-check">
                    <Label check>
                      <Control.checkbox
                        model=".agree"
                        className="form-check-input"
                        name="agree"
                      />
                      You may contact me
                    </Label>
                  </div>
                </Col>
                <Col md={4}>
                  <Control.select
                    model=".contactType"
                    name="contactType"
                    className="form-control"
                  >
                    <option>By Phone</option>
                    <option>By Email</option>
                  </Control.select>
                </Col>
              </Row>
              <Row className="form-group">
                <Label htmlFor="feedback" md={2}>
                  Your feedback
                </Label>
                <Col md={10}>
                  <Control.textarea
                    model=".feedback"
                    className="form-control"
                    id="feedback"
                    name="feedback"
                    rows={10}
                  />
                </Col>
              </Row>
              <Row className="form-group">
                <Col md={{ size: 4, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
