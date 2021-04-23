import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://tinderlone.herokuapp.com/'
})

export default instance;
