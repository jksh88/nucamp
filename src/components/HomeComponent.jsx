import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const RenderCard = ({ item }) => {
  const { image, name, description } = item;
  return (
    <Card>
      <CardImg src={image} alt={name} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardTitle>{description}</CardTitle>
      </CardBody>
    </Card>
  );
};

const Home = ({ campsite, promotion, partner }) => (
  <div className="container">
    <div className="row">
      <div className="col-md m-1">
        <RenderCard item={campsite} />
      </div>
      <div className="col-md m-1">
        <RenderCard item={promotion} />
      </div>
      <div className="col-md m-1">
        <RenderCard item={partner} />
      </div>
    </div>
  </div>
);

export default Home;
