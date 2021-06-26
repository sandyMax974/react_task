import React from "react";
import { Carousel } from "react-bootstrap";

const Task = () => {
  return (
    <>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>
            Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla
            vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit
            libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a
            pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://coolbackgrounds.io/images/backgrounds/black/pure-black-background-f82588d3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>
            Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla
            vitae elit libero, a pharetra augue mollis interdum.Nulla vitae elit
            libero, a pharetra augue mollis interdum.Nulla vitae elit libero, a
            pharetra augue mollis interdum.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </>
  );
};

export default Task;
