import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(){
    return (
        <header className="header">
            <h2>My Blog</h2>
            <nav className="nav">
                <Link to='/'>Главная</Link>
                <Link to = '/register'>Регистрация</Link>
                <Link to = '/login'>Войти</Link>
            </nav>
        </header>
    )
}