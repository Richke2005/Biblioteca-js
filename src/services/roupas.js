import axios from 'axios'

const connAPI = axios.create({ baseURL: "http://localhost:8000/roupas"})

async function getRoupas(){
    const response = await connAPI.get('/')

    return response.data
}

export {
    getRoupas
}