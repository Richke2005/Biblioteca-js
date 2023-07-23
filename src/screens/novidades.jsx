import Styled from 'styled-components';
import { Titulo } from '../components/Titulo/index'

const NewsContainer = Styled.div`
width: 100vw;
padding-top: 12vh;
`
function Novidades(){
    return (
        <NewsContainer>
            <Titulo>News</Titulo>
        </NewsContainer>
    )
}

export default Novidades