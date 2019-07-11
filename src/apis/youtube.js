import axios from 'axios'

const KEY ="AIzaSyDlBWXtsd103H7qo81KZusu_u9yRMKE7iM"

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})