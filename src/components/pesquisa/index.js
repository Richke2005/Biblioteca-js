import Input from '../input'
import Styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'
import { getLivros } from '../../services/livros'
import { postFavoritos } from '../../services/favoritos'
const PesquisaContainer = Styled.section`
        background-image: white;
        color: black;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`
const Titulo = Styled.h1`
color: black;
font-size: 36px;
text-align: center;
width: 100%;
`
const SubTitulo = Styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

const Resultado = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Pesquisa () {
    // Estado -- Agente Que muda o Estado -- Estado inicial
    const [livros, setLivros] = useState([])
    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    

    useEffect( () => {
       fetchRoupas()
    })

    async function fetchRoupas() {
        const livrosDaAPI = await getLivros()
        setLivros(livrosDaAPI)
    }

    async function insertFavoritos(id){
        await postFavoritos(id)
        alert(`livro de id: ${id} inserido com sucesso`)
    }
    
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar ?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante</SubTitulo>
            <Input
            placeholder="Escreva sua próxima leitura"
            onBlur={evt => {
                const textoDigitado = evt.target.value
                const resultadoPesquisa = livros.filter( livro => livro.titulo.includes(textoDigitado))
                setLivrosPesquisados(resultadoPesquisa)
            }}
            />
            {livrosPesquisados.map( livro => (
                <Resultado onClick={() => insertFavoritos(livro.id)}>
                    <h2>{livro.titulo}</h2>
                    <p>{livro.autor}</p>
                </Resultado>
            ))}
        </PesquisaContainer>
        
    )
}

export default Pesquisa