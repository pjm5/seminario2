import http from 'axios'
import ENDPONT from '../endpoints.js'

var path = ENDPONT.getUrl() + 'Position_members'

export default {
  /*
 cambiar por await o promises
 */
  getAll (token) {
    return http.get(path + '?access_token=' + token).then((response) => {
      return response.data
    })
  },
  create (token, item) {
    return http.post(path + '?access_token=' + token, item).then((response) => {
      return response.data
    })
  },
  delete (itemId) {
    return http.delete(path + '/' + itemId).then((response) => {
      return response.data
    })
  },
  update (id, token, item) {
    return http.patch(path + '/' + id + '?access_token=' + token, item).then((response) => {
      return response.data
    })
  }
}
