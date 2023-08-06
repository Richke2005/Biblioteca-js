import axios from 'axios'

const connAPI = axios.create({ baseURL: "http://localhost:8000/favoritos"})

async function getFavoritos(){
    const response = await connAPI.get('/')

    return response.data
}

async function postFavoritos(id){
    await connAPI.post(`/${id}`)
}

async function deleteFavoritos(id){
    await connAPI.delete(`/${id}`)
}

export {
    getFavoritos, 
    postFavoritos,
    deleteFavoritos
}