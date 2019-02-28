import http from 'axios'
import ENDPONT from '../endpoints'

var path = ENDPONT.getUrl() + 'UserRoles'

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
  logout (token) {
    return http.post(path + '/logout?access_token=' + token).then((response) => {
      return response.data
    })
  },
  getByUserId (idUser) {
    var stringfilter = JSON.stringify(idUser)

    return http.get(path + '?filter=' + stringfilter).then((response) => {
      return response.data
    })
  }
}
