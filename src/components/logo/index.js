import img from '../../logo.svg';
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

const LogoContainer = Styled.div`
    margin-right: ${props => props.marginRight|| '0px'};
    font-size: 20px;
    width: 10%;
    height: 100%;
    display: flex;
    align-items: center;
`

const LogoImg = Styled.img`
width: 50%;
object-fit: cover;
`

function Logo () {
    return(
        <LogoContainer 
        marginRight='5%'> 
           <LogoImg 
            src={img} alt='logo da página'
            />
           <Link to="/"><p>Angels´ <strong>Clothes</strong></p></Link>
        </LogoContainer>
    )
}

export default Logo;