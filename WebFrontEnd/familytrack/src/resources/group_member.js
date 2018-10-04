import http from "axios";
import ENDPONT from '../endpoints.js'

var path = ENDPONT.getUrl() + "group_members";

var config = {
  headers: { 'Authorization': "Bearer " + "" }
};

export default {
  /*
  cambiar por await o promises
  */
  getAll() {
    return http.get(path, config).then((response) => {
      return response.data;
    });
  },
  create(item) {
    return http.post(path, item, config).then((response) => {
      return response.data;
    });
  },
  delete(itemId) {
    return http.delete(path + "/" + itemId, config).then((response) => {
      return response.data;
    });
  },
  update(item) {
    return http.post(path + "/update", item, config).then((response) => {
      return response.data;
    });
  }
}