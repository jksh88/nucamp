import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const RenderDirectoryItem = ({ campsite }) => (
  <Card>
    <CardImg width="100%" src={campsite.image} alt={campsite.name} />
    <CardImgOverlay>
      <CardTitle>{campsite.name}</CardTitle>
    </CardImgOverlay>
  </Card>
);

const Directory = ({ campsites }) => {
  const directory = campsites.map((campsite) => (
    <div className="col-md-5 m-1" key={campsite.id}>
      <RenderDirectoryItem campsite={campsite} />
    </div>
  ));
  return (
    <div className="container">
      <div className="row">{directory}</div>
    </div>
  );
};

export default Directory;
