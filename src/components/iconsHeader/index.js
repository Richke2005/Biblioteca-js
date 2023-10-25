import myHome from '../../images/perfil.svg'
import shopping from '../../images/sacola.svg'
import Styled from 'styled-components'

const Icone = Styled.li`
margin-right: 40px;
cursor: pointer;
`

const Icones = Styled.ul`
display: flex;
align-itens: center;
`

const icons = [myHome, shopping]

function inconsHeader () {
    return (
        <Icones>
            {icons.map((icons, array) => (
              <Icone key={`icone${array}`}><img src={icons} alt='icone do header'></img></Icone> 
            ))}
        </Icones>
    )
}

export default inconsHeader