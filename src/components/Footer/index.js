import Styled from 'styled-components';

const Information = Styled.div`
width: 100%;
height: 50vh;
`

const SocialMedia = Styled.div`

`

function Footer() {
    return(
        <footer>
            <Information>
                <p>Ola</p>
            </Information>
            <SocialMedia>
            </SocialMedia>
        </footer>
    )

}

export default Footer