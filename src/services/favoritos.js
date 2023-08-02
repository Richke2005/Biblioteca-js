import axios from 'axios'

const connAPI = axios.create({ baseURL: "http://localhost:8000/favoritos"})

async function getFavoritos(){
    const response = await connAPI.get('/')

    return response.data
}

export {
    getFavoritos
}