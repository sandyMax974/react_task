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

  getAllTiles() {
    return axios.get(TILES_API);
  }
}

export default new TilesDataService();
