import React, { Component } from "react";
import TilesDataService from "../Services/TilesData.service";
import TasksDataService from "../Services/Tasks.Data.Service";
import Tile from "./Tile";
import AddTileModal from "../Components/AddTileModal";
import {
  Button,
  ButtonGroup,
  Container,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";

export default class TilesBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [],
      tasks: [],
      isFetching: false,
    };
  }

  getAllData = async () => {
    this.setState({ ...this.state, isFetching: true });
    const tilesListFromDatabase = await TilesDataService.getAllTiles();
    const tasksListFromDatabase = await TasksDataService.getAllTasks();
    this.setState({
      tiles: tilesListFromDatabase.data,
      tasks: tasksListFromDatabase.data,
      isFetching: false,
    });
  };

  getFilterTileList = (status) => {
    this.setState({
      ...this.state,
      tiles: this.state.tiles.filter((tile) => tile.status === status),
    });
  };

  resetTileList = () => {
    this.getAllData();
  };

  componentDidMount = () => {
    this.getAllData();
  };

  render() {
    return (
      <div>
        <h1>
          Tile Board
          <span style={{ float: "right" }}>
            <AddTileModal />
          </span>
        </h1>
        <hr />
        <ButtonGroup>
          <Button
            size="sm"
            variant="info"
            onClick={() => this.getFilterTileList("live")}
          >
            Live
          </Button>
          <Button
            size="sm"
            variant="info"
            onClick={() => this.getFilterTileList("pending")}
          >
            Pending
          </Button>
          <Button
            size="sm"
            variant="info"
            onClick={() => this.getFilterTileList("archive")}
          >
            Archive
          </Button>
        </ButtonGroup>{" "}
        <Button size="sm" variant="info" onClick={() => this.resetTileList()}>
          Reset
        </Button>
        <hr />
        <div>
          {this.state.isFetching === true ? (
            <div>
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading data...</span>
              </Spinner>
              <p>Loading data...</p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <Container>
          <Row className="show-grid">
            {this.state.tiles &&
              this.state.tiles.map((tile, index) => {
                return (
                  <Col key={`tile-${index}`} md={12} lg={6}>
                    <Tile
                      tile={tile}
                      tasks={this.state.tasks.filter(
                        (task) => task.tile === tile.id
                      )}
                      getAllData={this.getAllData}
                    />
                    <hr />
                  </Col>
                );
              })}
          </Row>
        </Container>
      </div>
    );
  }
}
