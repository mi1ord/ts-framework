import axios from 'axios'

axios.post('http://localhost:3000/users', {
  name: 'vasya',
  age: 24
})