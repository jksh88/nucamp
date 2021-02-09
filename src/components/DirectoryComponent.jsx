import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import CampsiteInfo from './CampsiteInfoComponent';

const RenderDirectoryItem = ({ campsite }) => (
  <Card>
    <CardImg width="100%" src={campsite.image} alt={campsite.name} />
    <CardImgOverlay>
      <CardTitle>{campsite.name}</CardTitle>
    </CardImgOverlay>
  </Card>
);

const Directory = ({ campsites, comments }) => {
  const directory = campsites.map((campsite) => (
    <div className="col-md-5 m-1" key={campsite.id}>
      <RenderDirectoryItem campsite={campsite} />
      <CampsiteInfo comments={comments} />
    </div>
  ));
  return (
    <div className="container">
      <div className="row">{directory}</div>
    </div>
  );
};

export default Directory;
