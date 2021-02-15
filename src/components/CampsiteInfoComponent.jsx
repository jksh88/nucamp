import React from 'react';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  Label,
} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

const minLen = (val) => val && val.toString().length >= 2;
const maxLen = (val) => val && val.toString().length <= 15;

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      author: '',
    };
  }

  toggleModal = () =>
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));

  handleSubmit = (values) => {
    console.log(JSON.stringify(values)); //Q: Why is this not console.loging?
    alert(JSON.stringify(values));
  };
  render() {
    return (
      <>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Label htmlFor="rating">Rating</Label>
              <Control.select
                model=".rating"
                name="rating"
                id="rating"
                className="form-control"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Control.select>
              <Label htmlFor="author" style={{ marginTop: '15px' }}>
                Your Name
              </Label>
              <Control.text
                model=".author"
                name="author"
                id="author"
                className="form-control"
                placeholder="Your Name"
                validators={{ minLen, maxLen }}
              />
              <Errors
                className="text-danger"
                model=".author"
                show="touched"
                messages={{
                  minLen: 'Need to be at least two characters',
                  maxLen: 'Cannot be more than 15 characters',
                }}
              />
              <Label htmlFor="comment" style={{ marginTop: '15px' }}>
                Comment
              </Label>
              <Control.textarea
                model=".comment"
                name="comment"
                id="comment"
                className="form-control"
                rows="6"
              />
              <Button
                type="submit"
                color="primary"
                style={{ marginTop: '15px' }}
              >
                Submit
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
        <Button outline onClick={this.toggleModal}>
          <i className="fa fa-pencil" /> Submit Comment
        </Button>
      </>
    );
  }
}

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
        <CommentForm />
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
