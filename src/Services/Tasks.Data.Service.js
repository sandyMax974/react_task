import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFToken";

const TASKS_API = "http://localhost:8000/api/tasks";

class TasksDataService {
  createTask(title, order, description, type, tile) {
    return axios.post(TASKS_API, {
      title,
      order,
      description,
      type,
      tile,
    });
  }

  getTask(id) {
    return axios.get(TASKS_API + `/${id}`);
  }

  getAllTasks(tileId) {
    return axios.get(TASKS_API + `?tile_id=${tileId}`);
  }

  updateTask(id, data) {
    return axios.patch(TASKS_API + `/${id}`, data);
  }

  deleteTask(id) {
    return axios.delete(TASKS_API + `/${id}`);
  }
}

export default new TasksDataService();
