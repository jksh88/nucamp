import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const RenderDirectoryItem = ({ campsite, comments }) => {
  const history = useHistory();
  return (
    <Card onClick={() => history.push(`/directory/${campsite.id}`)}>
      <CardImg width="100%" src={campsite.image} alt={campsite.name} />
      <CardImgOverlay>
        <CardTitle>{campsite.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

const Directory = ({ campsites, comments }) => {
  const directory = campsites.map((campsite) => (
    <div className="col-md-5 m-1" key={campsite.id}>
      <RenderDirectoryItem campsite={campsite} comments={comments} />
    </div>
  ));
  return (
    <div className="container">
      <div className="row">{directory}</div>
    </div>
  );
};

export default Directory;
