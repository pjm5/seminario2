import http from 'axios'
import ENDPONT from '../endpoints'

var path = ENDPONT.getUrl() + 'Users'

export default {
  /*
  cambiar por await o promises
  */
  getAll () {
    return http.get(path).then((response) => {
      return response.data
    })
  },
  create (item) {
    return http.post(path, item).then((response) => {
      return response.data
    })
  },
  delete (itemId) {
    return http.delete(path + '/' + itemId).then((response) => {
      return response.data
    })
  },
  update (item) {
    return http.post(path + '/update', item).then((response) => {
      return response.data
    })
  },
  login (item) {
    return http.post(path + '/login', item).then((response) => {
      return response.data
    })
  },
  logout (item) {
    return http.post(path + '/logout?access_token=' + item).then((response) => {
      return response.data
    })
  },
  async getById (item, id) {
    return await http.get(path + '/' + id + '?access_token=' + item).then((response) => {
      return response.data
    })
  }
}
