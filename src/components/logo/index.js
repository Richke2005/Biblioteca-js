import img from '../../logo.svg';
import Styled from 'styled-components'

const LogoContainer = Styled.div`
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
        <LogoContainer>
            <LogoImg 
            src={img} alt='logo da página'
            />
            <p>ola <strong>mundo</strong></p>
        </LogoContainer>
    )
}

export default Logo;