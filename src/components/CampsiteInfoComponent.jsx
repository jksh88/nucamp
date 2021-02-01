import React, { Component } from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap';

class CampsiteInfo extends Component {
  constructor(props) {
    super(props);
  }

  renderComments = (comments) => {
    if (comments) {
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {this.props.campsite.comments.map((comment) => (
            <p>
              {comment.text}
              <br />
              {`--${comment.author}, ${new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: '2-digit',
              }).format(Date.parse(comment.date))}`}
            </p>
          ))}
        </div>
      );
    }
    return <div />;
  };

  renderCampsite = (campsite) => (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardTitle>{campsite.name}</CardTitle>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );

  render() {
    return this.props.campsite ? (
      <div className="container">
        <div className="row">
          {this.renderCampsite(this.props.campsite)}
          {this.renderComments(this.props.campsite.comments)}
        </div>
      </div>
    ) : (
      <div />
    );
  }
}

export default CampsiteInfo;
