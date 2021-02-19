import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
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
import { Loading } from './LoadingComponents';

const minLen = (val) => val && val.toString().length >= 2;
const maxLen = (val) => val && val.toString().length <= 15;

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      author: '', //TODO: TO delete
    };
  }

  toggleModal = () =>
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));

  handleSubmit = (values) => {
    // this.toggleModal();
    this.props.addComment(
      this.props.campsiteId,
      values.rating,
      values.author,
      values.comment
    );
    console.log(JSON.stringify(values));
    console.log('CampsiteId***', this.props.campsiteId);
    alert(
      `Current State is: ${JSON.stringify({
        rating: values.rating,
        author: values.author,
        text: values.comment,
      })}`
    );
  };
  render() {
    return (
      <>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <Label htmlFor="rating">Rating</Label>
              <Control.select
                defaultValue="1"
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

const RenderComments = ({ comments, addComment, campsiteId }) => {
  console.log('CampsiteId*** at RenderComments', campsiteId);

  if (comments) {
    return (
      <div className="col-md-5 m-1">
        <h4>Comments</h4>
        {comments.map((comment) => (
          <p key={comment.id}>
            {comment.text}
            <br />
            {`--${comment.author}, ${new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'short',
              day: '2-digit',
            }).format(Date.parse(comment.date))}`}
          </p>
        ))}
        <CommentForm addComment={addComment} campsiteId={campsiteId} />
      </div>
    );
  }
  return <div />;
};

const RenderCampsite = ({ campsite }) => (
  <div className="col-md-5 m-1">
    <Card>
      <CardImg top src={campsite.image} alt={campsite.name} />
      <CardBody>
        <CardText>{campsite.description}</CardText>
      </CardBody>
    </Card>
  </div>
);

const CampsiteInfo = ({
  campsite,
  comments,
  addComment,
  isLoading,
  errorMessage,
}) => {
  console.log('CampsiteId*** at CampsiteInfo', campsite && campsite.id);

  if (isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  if (errorMessage) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>{errorMessage}</h4>
          </div>
        </div>
      </div>
    );
  }
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
          <RenderCampsite campsite={campsite} />
          <RenderComments
            comments={comments}
            addComment={addComment}
            campsiteId={campsite.id}
          />
          {/* {RenderCampsite(campsite)}
          {RenderComments(comments)} */}
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
};

//In CampsiteInfo, don't pass in campsiteId as the prop. It is the parameter used in the route and not the campsite object that has the four properties including campsite.id!

export default CampsiteInfo;
