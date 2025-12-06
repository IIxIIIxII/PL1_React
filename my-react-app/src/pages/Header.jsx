import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <span className="logo-icon">🎮</span>
          <h1>Game<span className="logo-highlight">Hub</span></h1>
        </div>
        
        <nav className="nav">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Главная
          </NavLink>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Все игры
          </NavLink>
          <NavLink 
            to="/" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              alert('Раздел в разработке!');
            }}
          >
            Топ игр
          </NavLink>
          <NavLink 
            to="/" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault();
              alert('Раздел в разработке!');
            }}
          >
            Новинки
          </NavLink>
        </nav>
        
        <div className="search-bar">
          <input type="text" placeholder="Поиск игр..." />
          <button>🔍</button>
        </div>
      </div>
    </header>
  )
}

export default Header