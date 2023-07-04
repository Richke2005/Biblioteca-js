import Styled from 'styled-components'

const Opcao = Styled.li`
letter-spacing: 2px;
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

const textOptions = ['Novidades', 'Masculino', 'Feminino']

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