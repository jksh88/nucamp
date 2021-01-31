import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';

class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCampsite: null,
    };
  }
  render() {
    const directory = this.props.campsites.map((campsite) => (
      <div className="col" key={campsite.id}>
        <img src={campsite.image} alt={campsite.name} />
        <h2>{campsite.name}</h2>
        <p>{campsite.description}</p>
      </div>
    ));
    return (
      <div className="container">
        <div className="row">{directory}</div>
      </div>
    );
  }
}

export default Directory;
