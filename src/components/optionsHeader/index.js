import Styled from 'styled-components'
import { useState } from 'react'
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

function OptionsHeader () {
  const [component, setComponent] = useState([])


    return (
        <Opcoes>
          <Opcao onMouseOver={(element) => {
            const clickedElement = element.target
            setComponent((ageComponent) => [...ageComponent, clickedElement])
            console.log(component)
          }}>
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

export default OptionsHeader