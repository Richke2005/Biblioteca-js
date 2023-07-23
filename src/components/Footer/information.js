import Styled from 'styled-components'

const InformationContainer = Styled.div`
display: flex;
padding: 10px;
flex-direction: column;
align-items: center;
`

const Title = Styled.h3`
font-size: 1.3rem;
`
const InformationList = Styled.ul`
padding: 0;
text-align: left;
`
const Information = ({titulo, lis}) =>{
    return(
    <InformationContainer>
        <Title>{titulo}</Title>
        <InformationList>{lis.map(li => (
            <li>{li}</li>
        ))}
        </InformationList>
    </InformationContainer>
    )
}

export default Information