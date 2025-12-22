import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import "./Header.css";

export default function Header() {
    const { user, logout, theme, toggleTheme } = useContext(AuthContext);

    return (
        <header className="header">
            <div className="logo">
                <Link to='/'><h2>My blog</h2></Link>
            </div>
            <nav className="nav">
                <Link to='/'>Главная</Link>
                <Link to='/posts'>Посты</Link>
                <Link to='/about'>О нас</Link>
                <Link to='/contacts'>Контакты</Link>
                {user ? (
                    <>
                        <Link to='/create'>Создать пост</Link>
                        
                        <span className="username">{user.email}</span>
                        <button onClick={logout} className="logout-btn">Выйти</button>
                    </>
                ) : (
                    <>
                        <Link to='/login'>Вход</Link>
                        <Link to='/register'>Регистрация</Link>
                    </>
                )}
            </nav>
        </header>
    );
}