import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-2 offset-1">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/directory">Directory</Link>
              </li>
              <li>
                <Link to="/aboutus">About</Link>
              </li>
              <li>
                <Link to="/contactus">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="col-6 col-sm-3 text-center">
            <h5>Social</h5>
            <a
              className="btn btn-social-icon btn-instagram"
              href="https://instagram.com"
            >
              <i className="fa fa-instagram"></i>
            </a>{' '}
            <a
              className="btn btn-social-icon btn-facebook"
              href="https://facebook.com"
            >
              <i className="fa fa-facebook"></i>
            </a>{' '}
            <a
              className="btn btn-social-icon btn-twitter"
              href="https://twitter.com"
            >
              <i className="fa fa-twitter"></i>
            </a>{' '}
            <a
              className="btn btn-social-icon btn-youtube"
              href="https://youtube.com"
            >
              <i className="fa fa-youtube"></i>
            </a>
          </div>

          <div className="col-sm-4 text-center">
            <a href="tel:+1234567890" role="button" className="btn btn-link">
              <i className="fa fa-phone" />
              123-456-7890
            </a>
            <a
              href="mailto:notreal@notreal.io"
              role="button"
              className="btn btn-link"
            >
              <i className="fa fa-envelope-o" />
              notreal@mail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
