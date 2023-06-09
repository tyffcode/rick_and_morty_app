import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';

// los componentes funcionales solo funcional con hooks, ojitooo!!
const Nav = ({ onSearch }) => {
    return (
        <nav>
           <SearchBar onSearch={onSearch} />
           <button>
                <Link to='/about'>ABOUT</Link>
           </button>

            <button>
                <Link to='./home'>HOME</Link>
            </button>           
        </nav>
    )
}

export default Nav;