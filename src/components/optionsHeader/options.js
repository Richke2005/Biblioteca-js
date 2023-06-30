import './style.css';

const textOptions = ["Menu", 'Sobre nós', 'nossa história']

function optionsHeader () {
    return (
        <ul className='opcoes'>
          {
          textOptions.map((txt) => (
            <li className='opcao'><p>{txt}</p></li>
            )
            )}
        </ul>
    )
}

export default optionsHeader