import React, { Component } from "react";
import { FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import config from "../config";
import "./Home.css";
import { s3Upload, s3List } from "../libs/awsLib";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.file = null;
    this.files = {};

    this.state = {
      isLoading: null
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push('/login');
    }
  
    try {
      await s3List()
        .then(result => this.files=result);
    } catch (e) {
      alert(e);
    }
  
    this.setState({ isLoading: false });
  }

  handleFileChange = event => {
    this.file = event.target.files[0];
  }

  handleSubmit = async event => {
    event.preventDefault();

    if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
      alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB.`);
      return;
    }

    this.setState({ isLoading: true });

    try {
      await s3Upload(this.file)
      .then(this.props.history.push());
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  renderFiles() {
    return (this.files.map(function(file){
      return <li>{file.key}</li>
    }));
  }

  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Storage</h1>
          <p>A simple storage app</p>
        </div>
        <h2>Files</h2>
        <p>{this.files.size > 0 ? this.renderFiles() : 'No files currently exist'}</p>
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="file">
              <ControlLabel>Upload File</ControlLabel>
              <FormControl onChange={this.handleFileChange} type="file" />
            </FormGroup>
            <LoaderButton
              block
              bsStyle="primary"
              bsSize="large"
              type="submit"
              isLoading={this.state.isLoading}
              text="Create"
              loadingText="Creating…"
            />
          </form>
      </div>
    );
  }
}