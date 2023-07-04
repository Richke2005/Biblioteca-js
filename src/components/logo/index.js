import img from '../../logo.svg';
import Styled from 'styled-components'

const LogoContainer = Styled.div`
    margin-right: ${props => props.marginRight|| '0px'};
    font-size: 20px;
    height: 100%;
    display: flex;
    align-items: center;
`

const LogoImg = Styled.img`
border-radios: 5px;
`

function Logo () {
    return(
        <LogoContainer 
        marginRight='30px'>
            <LogoImg 
            src={img} alt='logo da página'
            />
            <p>Angels´ <strong>Clothes</strong></p>
        </LogoContainer>
    )
}

export default Logo;