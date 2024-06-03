import img from '../../images/logo-copy.png';
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
width: 100%;
margin-left: 10px;
object-fit: cover;
border-radius: 40px;
`

function Logo () {
    return(
        <LogoContainer 
        marginRight='5%'> 
           <LogoImg 
            src={img} alt='logo da página'
            />
           <p style={{marginLeft: 10}}>Angels´s <strong>BooksStore</strong></p>
        </LogoContainer>
    )
}

export default Logo;