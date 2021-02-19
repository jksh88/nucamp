import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponents';

const RenderCard = ({ item, campsitesLoading, campsitesErrorMessage }) => {
  if (campsitesLoading) {
    return <Loading />;
  }
  if (campsitesErrorMessage) {
    return <h4>{campsitesErrorMessage}</h4>;
  }
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

const Home = ({
  campsite,
  promotion,
  partner,
  campsitesLoading,
  campsitesErrorMessage,
}) => (
  <div className="container">
    <div className="row">
      <div className="col-md m-1">
        <RenderCard
          item={campsite}
          campsitesLoading={campsitesLoading}
          campsitesErrorMessage={campsitesErrorMessage}
        />
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
