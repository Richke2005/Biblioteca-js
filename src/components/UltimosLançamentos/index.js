import { livros } from './DadosUltimoLancamento'
import { Titulo } from '../Titulo/index'
import Styled from 'styled-components'

const UltimosLancamentosContainer = Styled.section`
background-color: #EBECEE;
padding-bottom: 20px;
display: flex;
flex-direction: column;
`

const NovosLivrosContainer = Styled.div`
margin-top: 30px;
display: flex;
justify-content: center;
cursor: pointer;
`

function UltimosLancamentos() {
    return( 
        <UltimosLancamentosContainer>   
            <Titulo 
            cor='black'
            fontSize='35px'
            >Novidades</Titulo>
            <NovosLivrosContainer>
                {livros.map( livro => (
            <img key={livro.id} src={livro.src} alt="imagem de livros em estoque"/>
           ))}
            </NovosLivrosContainer>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos