import {Link} from 'react-router-dom';
import "./Header.css";

export default function Header() {
    return(
        <header className="header">
            <h2>My blog</h2>
            <nav className="nav">
                <Link to='/'>Home</Link>
                <Link to='#'>TODO</Link>
                <Link to='#'>About</Link>
                <Link to='#'>Contacts</Link>
            </nav>
        </header>
    )
}