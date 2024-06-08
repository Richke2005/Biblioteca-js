import Styled from 'styled-components';
import { Titulo } from '../components/Titulo/index'

const NewsContainer = Styled.div`
width: 100vw;
padding-top: 12vh;
`

const Slide = Styled.div`

`
function Novidades(){
    return (
        <NewsContainer>
            <Titulo>News</Titulo>
            <Slide/>
        </NewsContainer>
    )
}

export default Novidades