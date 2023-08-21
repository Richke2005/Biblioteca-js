import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { deleteFavoritos, getFavoritos } from '../services/favoritos'
import livroImg from '../images/livro.png'


const AppContainer = styled.div`
   background-image: linear-gradient(90deg,#002F52 35%,#326589 165%);
`

const ResultadoContainer = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
`

const Resultado = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 20px 0;
   cursor: pointer;
   text-align: center;
   padding: 0 100px;
   p {
       width: 200px;
       color: #FFF;
   }
   img {
       width: 100px;
   }
   &:hover {
       border: 1px solid white;
   }
`

const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 12vh;
`

function Favoritos(){
    const[favoritos, setFavoritos] = useState([])

    async function fetchFavoritos(){
        const favoritosDaAPI = await getFavoritos()
        setFavoritos(favoritosDaAPI)
    }

    async function deletarFavorito(id){
      await deleteFavoritos(id)
      await fetchFavoritos()
      alert(`livro de id: ${id} deletado com sucesso`)
    }

    useEffect( () => {
        fetchFavoritos()
    })
    
    return( 
        <AppContainer>
        <div>
          <Titulo>Aqui estão seus livros favoritos:</Titulo>
          <ResultadoContainer>
            {
              favoritos.length !== 0 ? favoritos.map(favorito => (
                <Resultado onClick={() => deletarFavorito(favorito._id)}>
                  <p>{favorito.favorito.titulo}</p>
                  <img src={livroImg} alt='Imagem de livro'/>
                </Resultado>
              )) : null
            }
          </ResultadoContainer>
        </div>
      </AppContainer>
    )
}

export default Favoritos