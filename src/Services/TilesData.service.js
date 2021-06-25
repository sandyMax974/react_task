import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFToken";

const TILES_API = "http://localhost:8000/api/tiles";

class TilesDataService {
  createTile(launchDate, status) {
    return axios.post(TILES_API, {
      launchDate,
      status,
    });
  }

  getTile(id) {
    return axios.get(TILES_API + `/${id}`)
  }

  getAllTiles() {
    return axios.get(TILES_API);
  }

  findTilesByStatus(status) {
  }

  update(id, data) {
    return axios.put(TILES_API + `${id}`, data)
  }

  delete(id) {
    return axios.delete(TILES_API + `/${id}`);
  }

}

export default new TilesDataService();
