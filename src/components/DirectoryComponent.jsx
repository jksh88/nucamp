import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { useHistory, Link } from 'react-router-dom';
import { Loading } from './LoadingComponents';
import { baseUrl } from '../shared/baseUrl';

const RenderDirectoryItem = ({ campsite, comments }) => {
  const history = useHistory();
  return (
    <Card onClick={() => history.push(`/directory/${campsite.id}`)}>
      <CardImg
        width="100%"
        src={`${baseUrl}${campsite.image}`}
        alt={campsite.name}
      />
      <CardImgOverlay>
        <CardTitle>{campsite.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};
//TODO: comments prop removal for now? Note different level before action creator is written.
const Directory = ({ campsites, comments }) => {
  console.log('CAMPSITES: ', campsites);
  const directory = campsites?.map((campsite) => (
    <div className="col-md-5 m-1" key={campsite.id}>
      <RenderDirectoryItem campsite={campsite} comments={comments} />
    </div>
  ));
  if (campsites.isLoading) {
    return <Loading />;
  }
  if (campsites.errorMessage) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>{campsites.errorMessage}</h4>;
          </div>
        </div>
      </div>
    );
  }
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
