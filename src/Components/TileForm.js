import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import TilesDataService from "../Services/TilesData.service";


class TileForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      status: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(e) {
    const { date, status } = this.state;
    e.preventDefault();
    console.log(date, status)
    await TilesDataService.createTile(date, status)
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log("Inputs", this)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
         <Form.Label>Launch Date</Form.Label>
         <Form.Control
           name="date"
           type="date"
          onChange={this.handleInputChange}
        />
       </Form.Group>

       <Form.Group>
         <Form.Label>Status</Form.Label>
         <Form.Control
          name="status"
          as="select"
          onChange={this.handleInputChange}
        >
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

// const TileForm = () => {
//   const [launchDate, setLaunchDate] = useState("");
//   const [status, setStatus] = useState("");

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     console.log(e);
//     // await TilesDataService.createTile(launchDate, status);
//     // post method to API with form data
//   };

//   return (
//     <Form onSubmit={onSubmit}>
//       <Form.Group>
//         <Form.Label>Launch Date</Form.Label>
//         <Form.Control
//           id="date-input"
//           type="date"
//           onChange={setLaunchDate}
//         />
//       </Form.Group>

//       <Form.Group controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>

//       <Form.Group>
//         <Form.Label>Status</Form.Label>
//         <Form.Control
//           id="status-select"
//           as="select"
//           onChange={setStatus}
//         >
//           <option>-- Choose an option --</option>
//           <option value="PENDING">Pending</option>
//           <option value="ARCHIVE">Archive</option>
//           <option value="LIVE">Live</option>
//         </Form.Control>
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// };

export default TileForm;
