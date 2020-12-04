import axios from 'axios'

//подлючаем библиотеку axios для HTTP-запросов на порт 9000

const instance = axios.create({
    baseURL: 'http://localhost:9000'
})

export default instance