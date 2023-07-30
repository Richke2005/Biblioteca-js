import axios from 'axios'

const livrosAPI = axios.create({ baseURL: 'https://localhost:8000/roupas'})

async function getRoupas(){
    const response = await livrosAPI.get('/')

    return response.data
}

export {
    getRoupas
}