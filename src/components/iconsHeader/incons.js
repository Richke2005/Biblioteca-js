import './style.css'
import myHome from '../../images/perfil.svg'
import shopping from '../../images/sacola.svg'


const icons = [myHome, shopping]

function inconsHeader () {
    return (
        <div className='icons'>
            {icons.map(icons => (
               <img src={icons} alt='icone do header' className='icon-img'></img>
            ))}
        </div>
    )
}

export default inconsHeader