# React task

## Description
We want you to expand the application by creating a simple React frontend which interacts with the Django API, allowing tiles to be created/edited/removed, and allow tasks to be created/edited/removed within these tiles. Tiles should be filterable by their status and are ordered by their launch dates. Tasks within the tiles should be ordered by their order field. All data fields should be visible. Ignore building in authentication and assume all users have access to view and manipulate these tasks and tiles.

## App Structure
![Components](https://github.com/sandyMax974/react_task/blob/main/public/Screenshot%202021-06-29%20at%2013.20.26.png)

* App
  * TilesBoard
    * Tile
      * Update Tile
        * Update Tile Form
      * Delete Tile
      * Add Task Modal
        * New Task Form
      * TasksBoard
        * Update Task Modal
          * Update Task Form
        * Delete Task
  * Add Tile Modal
    * New Tile Form

## How to run

### Prerequisites
* You'll also need to have the latest version of the back-end server running: [django_task](https://github.com/sandyMax974/django_task)

1. Clone this repository: 
2. `cd` into `react_task` directory
3. Run dependancies with: `yarn install`
4. Run `yarn start`

App runs on `http://localhost:3000/`

* [Demo Link (Brave browser)](https://youtu.be/Io1WwkPkE44)
* [Demo Link (Chrome browser)](https://youtu.be/n1R6osZ9UAU)

#### Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
