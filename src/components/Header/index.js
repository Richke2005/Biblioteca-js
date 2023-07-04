import Logo from '../logo'
import Options from '../optionsHeader'
import Icons from '../iconsHeader'
import Input from '../input/index'
import Styled from 'styled-components'

const HeaderContainer = Styled.header`
width: 100vw;
height: ${props => props.height || '12vh'};
display: flex;
justify-content: space-around;
align-items: center;
background-color: white;
border-bottom: solid 1px black;
`


function Header () {
    window.addEventListener('scroll', () =>{
        const windowTop = window.pageYOffset
        const header = document.querySelector('header')
        if(windowTop > header.offsetTop){
          <HeaderContainer
          height='10vh'/>
        }
    })
   
    return (
    <HeaderContainer>
        <Logo></Logo>
        <Options/>
        <Input 
        padding='5px 20px'
        placeholder='O que você procura ?'/>
        <Icons></Icons>
    </HeaderContainer>
    )
}

export default Header