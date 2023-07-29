import Styled from 'styled-components'
import Information from './information'
import image from '../../images/sacola.svg'

const FooterContainer = Styled.footer`
width: 100vw;
display: flex;
justify-content: space-around;
background-color: lightgray;
`

const SocialMedia = Styled.div`
display: flex;
`

const Lis = ['Sobre nós', 'Sobre História', 'Wild kingdom']
const AnotherList = ['Youtube', 'Facebook', 'Twitter', 'Workut']

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
                <img src={image} alt="Social media"></img>
            </SocialMedia>
           
        </FooterContainer>
    )

}

export default Footer