import Styled from 'styled-components'

const Opcao = Styled.li`
letter-spacing: 2px;
`
const Opcoes = Styled.ul`
padding: 0 5px;
display: flex;
text-align: center;
justify-content: space-around;
align-items: center;
width: 50%;
`

const textOptions = ["Menu", 'Sobre nós', 'nossa história']

function optionsHeader () {
    return (
        <Opcoes>
          {
          textOptions.map((txt) => (
            <Opcao><p>{txt}</p></Opcao>
            )
            )}
        </Opcoes>
    )
}

export default optionsHeader