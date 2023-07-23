import Styled from 'styled-components'
import Information from './information'

const FooterContainer = Styled.footer`
width: 100vw;
display: flex;
background-color: lightgray;
`


//TODO: socialmedia container
const SocialMedia = Styled.div`

`
const Lis = ['Sobre nós', "example", 'example']
const AnotherList = ['example', 'example']

function Footer() {
    return(
        <FooterContainer>
          <Information
          titulo="Sobre Nós"
          lis={Lis}
          />
           <Information
          titulo="Social medias"
          lis={AnotherList}
          />
            <SocialMedia>
                <img src="" alt=''></img>
            </SocialMedia>
        </FooterContainer>
    )

}

export default Footer