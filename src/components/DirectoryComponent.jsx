import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { useHistory, Link } from 'react-router-dom';

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
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem Active>Directory</BreadcrumbItem>
          </Breadcrumb>
          <h2>Directory</h2>
          <hr />
        </div>
      </div>
      <div className="row">{directory}</div>
    </div>
  );
};

export default Directory;
