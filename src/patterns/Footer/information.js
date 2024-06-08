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
const Information = ({titulo, list}) =>{
    return<InformationContainer>
        <Title>{titulo}</Title>
        <InformationList>{list.map(li => (
            <li key={`chave${li}`}><a href='https://google.com'>{li}</a></li>
        ))}
        </InformationList>
    </InformationContainer>;
}

export default Information;