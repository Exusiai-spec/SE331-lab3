import axios from 'axios'

const apiClient = axios.create({
  baseURL: ('https://my-json-server.typicode.com/Exusiai-spec/SE331-lab2-backend/'),
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  }
}