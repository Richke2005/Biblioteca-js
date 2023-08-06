import axios from 'axios'

const connAPI = axios.create({ baseURL: "http://localhost:8000/livros"})

async function getLivros(){
    const response = await connAPI.get('/')

    return response.data
}

export {
    getLivros
}