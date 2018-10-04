export default {
  data: () => ({

  }),
  getUrl () {
    if (process.env.NODE_ENV === 'development') { return 'http://localhost:3000/api/' } else { return 'http://localhost:3000/api/' }
  }
}
