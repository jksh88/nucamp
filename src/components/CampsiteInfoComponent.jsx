import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';

import { Link } from 'react-router-dom';

const RenderComments = (comments) => {
  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map((comment) => (
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

const RenderCampsite = (campsite) => (
  <div className="col-md-5 m-1">
    <Card>
      <CardImg top src={campsite.image} alt={campsite.name} />
      <CardBody>
        <CardText>{campsite.description}</CardText>
      </CardBody>
    </Card>
  </div>
);

const CampsiteInfo = ({ campsite, comments }) => {
  return campsite ? (
    <div className="container">
      <div className="row">
        <div className="col">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/directory">Directory</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{campsite.name}</BreadcrumbItem>
          </Breadcrumb>
          <h2>{campsite.name}</h2>
          <hr />
        </div>
        <div className="row">
          {RenderCampsite(campsite)}
          {RenderComments(comments)}
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
};

export default CampsiteInfo;
