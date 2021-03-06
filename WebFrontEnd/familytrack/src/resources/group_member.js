import http from 'axios'
import ENDPONT from '../endpoints.js'

var path = ENDPONT.getUrl() + 'group_members'

export default {
  /*
  cambiar por await o promises
  */
  getAllFilter (token, filter) {
    var stringfilter = JSON.stringify(filter)
    return http.get(path + '?filter=' + stringfilter + '&access_token=' + token).then((response) => {
      return response.data
    })
  },
  getAll () {
    return http.get(path).then((response) => {
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
