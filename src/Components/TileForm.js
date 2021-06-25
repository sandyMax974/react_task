import React from "react";
import { Button, Form } from "react-bootstrap";
import TilesDataService from "../Services/TilesData.service";
import App from "../App"
import ReactDOM from "react-dom";


class TileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      status: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit() {
    const { date, status } = this.state;
    await TilesDataService.createTile(date, status)
    ReactDOM.render(App, document.getElementById('root'));
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Launch Date</Form.Label>
          <Form.Control name="date"type="date" onChange={this.handleInputChange} />
        </Form.Group>

      <Form.Group>
        <Form.Label>Status</Form.Label>
        <Form.Control name="status" as="select" onChange={this.handleInputChange} >
          <option>-- Choose an option --</option>
          <option value="pending">Pending</option>
          <option value="archive">Archive</option>
          <option value="live">Live</option>
        </Form.Control>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    )
  }
}

export default TileForm;
