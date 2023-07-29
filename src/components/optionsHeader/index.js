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
const Options = ['NOVIDADES', 'MASCULINO', 'FEMININO']

function OptionsHeader () {
    return (
        <Opcoes>
          {Options.map( texto => (
            <Link to={`${texto.toLowerCase()}`}><Opcao>{texto}</Opcao></Link>
          ))}
        </Opcoes>
        
    )
}

export default OptionsHeader