import './style.css';
import img from '../../logo.svg';

function Logo () {
    return(
        <div className='logo'>
            <img src={img} alt='logo da página'></img>
            <p>ola <strong>mundo</strong></p>
        </div>
    );
}

export default Logo;