import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { Loading } from './LoadingComponents';
import { baseUrl } from '../shared/baseUrl';

const RenderCard = ({ item, isLoading, errorMessage }) => {
  if (isLoading) {
    return <Loading />;
  }
  if (errorMessage) {
    return <h4>{errorMessage}</h4>;
  }
  const { image, name, description } = item;
  console.log('ITEM at RENDERCARD: ', item);
  return (
    <Card>
      <CardImg src={`${baseUrl}${image}`} alt={name} />
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
  partnersLoading,
  partnersErrorMessage,
  promotionsLoading,
  promotionsErrorMessage,
}) => (
  <div className="container">
    <div className="row">
      <div className="col-md m-1">
        <RenderCard
          item={campsite}
          isLoading={campsitesLoading}
          errorMessage={campsitesErrorMessage}
        />
      </div>
      <div className="col-md m-1">
        <RenderCard
          item={promotion}
          isLoading={promotionsLoading}
          errorMessage={promotionsErrorMessage}
        />
      </div>
      <div className="col-md m-1">
        <RenderCard
          item={partner}
          isLoading={partnersLoading}
          errorMessage={partnersErrorMessage}
        />
      </div>
    </div>
  </div>
);

export default Home;
