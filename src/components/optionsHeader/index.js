import Styled from 'styled-components'
import { Link } from 'react-router-dom'

const Opcao = Styled.li`
letter-spacing: 3px;
font-size: 1.1rem;
list-style: none;
margin-right: 40px;
cursor: pointer;
`

const Opcoes = Styled.ul`
padding: 0 5px;
display: flex;
text-align: center;
justify-content: space-around;
align-items: center;
`

function optionsHeader () {
    return (
        <Opcoes>
          <Opcao id="masculino">
            <Link to="/">Home</Link>
          </Opcao>
          <Opcao>
            <Link to="/novidades">Novidades</Link>
          </Opcao>
          <Opcao>Masculino</Opcao>
          <Opcao>Feminino</Opcao>
        </Opcoes>
        
    )
}

export default optionsHeader