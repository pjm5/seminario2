import http from 'axios'
import ENDPONT from '../endpoints.js'

var path = ENDPONT.getUrl() + 'groups'

var config = {
  headers: { 'Authorization': 'bearer ' + '' }
}

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
    return http.post(path + '?access_token=' + token, item, config).then((response) => {
      return response.data
    })
  },
  delete (itemId) {
    return http.delete(path + '/' + itemId, config).then((response) => {
      return response.data
    })
  },
  update (item) {
    return http.post(path + '/update', item, config).then((response) => {
      return response.data
    })
  },
  getOneById (id) {
    return http.get(path + '/' + id, config).then((response) => {
      return response.data
    })
  }
}
