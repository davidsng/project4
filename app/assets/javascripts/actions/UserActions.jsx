import API from '../API'

export default {
  getAllUsers () {
    console.log('UserActions')
    API.getAllUsers()
  },
  followUser (userId) {
    API.followUser(userId)
  }
}
