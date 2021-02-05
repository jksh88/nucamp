import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import CampsiteInfo from './CampsiteInfoComponent';
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { CAMPSITES } from '../shared/campsites';
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campsites: CAMPSITES,
      comments: COMMENTS,
      partners: PARTNERS,
      promotions: PROMOTIONS,
      selectedCampsite: null,
      selectedComments: [],
    };
  }

  onCampsiteSelect(campsiteId) {
    const selectedComments = this.state.comments.filter(
      (comment) => comment.campsiteId === campsiteId
    );
    this.setState({ selectedCampsite: campsiteId });
    this.setState({ selectedComments: selectedComments });
  }

  handleClick = (campsiteId) => this.onCampsiteSelect(campsiteId);

  render() {
    return (
      <div>
        <Header />
        <Directory
          campsites={this.state.campsites}
          handleClick={this.handleClick}
        />
        <CampsiteInfo
          campsite={
            this.state.campsites.filter(
              (campsite) => campsite.id === this.state.selectedCampsite
            )[0]
          }
          comments={this.state.selectedComments}
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
