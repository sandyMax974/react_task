import React, { Component } from "react";
import TilesDataService from "../Services/TilesData.service";
import Tile from "./Tile";
import AddTileModal from "../Components/AddTileModal";
import { Button, ButtonGroup, Container, Row, Col } from "react-bootstrap";

export default class TilesBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: [],
      isFetching: false, //might use to add a spinner
    };
  }

  getTileData = async () => {
    this.setState({ ...this.state, isFetching: true });
    const tilesListFromDatabase = await TilesDataService.getAllTiles();
    this.setState({ tiles: tilesListFromDatabase.data, isFetching: false });
  };

  getFilterTileList = (status) => {
    this.setState({
      ...this.state,
      tiles: this.state.tiles.filter((tile) => tile.status === status),
    });
  };

  resetTileList = () => {
    this.getTileData();
  };

  componentDidMount = () => {
    this.getTileData();
  };

  render() {
    console.log("Tileboard render");
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
        <p>{this.state.isFetching === true ? "Fetching tiles..." : ""}</p>
        <Container>
          <Row className="show-grid">
            {this.state.tiles &&
              this.state.tiles.map((tile, index) => {
                return (
                  <Col key={`tile-${index}`} md={12} lg={6}>
                    <Tile tile={tile} getTilesData={this.getTileData} />
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
