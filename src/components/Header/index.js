import Logo from '../logo'
import Options from '../optionsHeader'
import Icons from '../iconsHeader'
import Styled from 'styled-components'

const HeaderContainer = Styled.header`
width: 100vw;
height: 12vh;
display: flex;
justify-content: space-around;
align-items: center;
background-color: whitesmoke;
`

function Header () {
    return (
    <HeaderContainer>
        <Logo></Logo>
        <Options></Options>
        <Icons></Icons>
    </HeaderContainer>
    )
}

export default Header