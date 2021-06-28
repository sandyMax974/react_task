import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import TilesBoard from "./Containers/TilesBoard";

function App() {
  return (
    <Container>
      <TilesBoard />
    </Container>
  );
}

export default App;
