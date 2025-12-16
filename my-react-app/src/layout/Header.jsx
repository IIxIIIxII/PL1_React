import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Header.css";

export default function Header(){
    const [isAuth, setIsAuth] = useState(false);
    const [userName, setUserName] = useState("");
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('isAuth');
        setIsAuth(!!auth);
        try {
            const raw = localStorage.getItem('user');
            if(raw){
                const u = JSON.parse(raw);
                setUserName(u.firstName || u.lastName || u.email || 'Пользователь');
            }
        } catch (e) {
            // ignore
        }
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const logout = () => {
        localStorage.removeItem('isAuth');
        navigate('/login');
        setIsAuth(false);
    }

    const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');

    return (
        <header className="header">
            <h2>My Blog</h2>
            <nav className="nav">
                <Link to='/'>Главная</Link>
                <Link to='/about'>О нас</Link>
                <Link to='/contacts'>Контакты</Link>
                {!isAuth ? (
                    <>
                        <Link to='/register'>Регистрация</Link>
                        <Link to='/login'>Войти</Link>
                    </>
                ) : (
                    <>
                        <span className="nav-user">Привет, {userName}</span>
                        <button className="nav-logout" onClick={logout}>Выйти</button>
                    </>
                )}
                <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">{theme === 'light' ? '🌞' : '🌙'}</button>
            </nav>
        </header>
    )
}