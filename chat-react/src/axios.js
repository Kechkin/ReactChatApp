import axios from 'axios'

//��������� ���������� axios ��� HTTP-�������� �� ���� 9000

const instance = axios.create({
    baseURL: 'http://localhost:9000'
})

export default instance