import Input from '../input'
import Styled from 'styled-components'
import { useState } from 'react'
import { useEffect } from 'react'
import { getRoupas } from '../../services/roupas'

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
    const [roupas, setRoupas] = useState([])
    const [roupasPesquisadas, setRoupasPesquisadas] = useState([])
    

    useEffect( () => {
       fetchRoupas()
    })

    async function fetchRoupas() {
        const roupasDaAPI = await getRoupas()
        setRoupas(roupasDaAPI)
    }
    
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar ?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante</SubTitulo>
            <Input
            placeholder="Escreva sua próxima leitura"
            onBlur={evt => {
                const textoDigitado = evt.target.value
                const resultadoPesquisa = roupas.filter( roupa => roupa.type.includes(textoDigitado))
                setRoupasPesquisadas(resultadoPesquisa)
            }}
            />
            {roupasPesquisadas.map( roupa => (
                <Resultado>
                    <p>{roupa.type}</p>
                    <img src={roupa.src} alt='Imagem pesquisada'></img>
                </Resultado>
            ))}
        </PesquisaContainer>
        
    )
}

export default Pesquisa