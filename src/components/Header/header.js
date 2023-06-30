import './style.css'
import Logo from '../logo/logo'
import Options from '../optionsHeader/options'
import Icons from '../iconsHeader/incons'

function Header () {
    return (
    <header className="App-header">
        <Logo></Logo>
        <Options></Options>
        <Icons></Icons>
    </header>
    )
}

export default Header