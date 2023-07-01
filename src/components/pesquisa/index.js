import Input from '../input'
import Styled from 'styled-components'
import { useState } from 'react'

const PesquisaContainer = Styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`
const Titulo = Styled.h1`
color: #FFF;
font-size: 36px;
text-align: center;
width: 100%;
`
const SubTitulo = Styled.h3`
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 40px;
`

function Pesquisa () {
    const [textoDigitado, setTextoDigitado] = useState('')
    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar ?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante</SubTitulo>
            <Input
            placeholder="Escreva sua próxima leitura"
            onBlur={evt => setTextoDigitado(evt.target.value)}
            />
            <p>{textoDigitado}</p>
        </PesquisaContainer>
        
    )
}

export default Pesquisa