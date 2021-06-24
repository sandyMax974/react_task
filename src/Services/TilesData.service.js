import axios from "axios";

const TILES_API = "http://localhost:8000/api/tiles";

class TilesDataService {
  create() {}

  getAllTiles() {
    return axios.get(TILES_API);
  }
}

export default new TilesDataService();
