import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🎮</span>
              <h3>Game<span className="logo-highlight">Hub</span></h3>
            </div>
            <p>Лучший портал для геймеров. Все о самых популярных играх современности.</p>
            <div className="social-links">
              <a href="#" className="social-link" title="Discord">🎮</a>
              <a href="#" className="social-link" title="YouTube">▶️</a>
              <a href="#" className="social-link" title="Telegram">📱</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Быстрые ссылки</h4>
            <ul>
              <li><a href="#">Главная</a></li>
              <li><a href="#">Топ игр</a></li>
              <li><a href="#">Новинки</a></li>
              <li><a href="#">О нас</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Популярные игры</h4>
            <ul>
              <li><a href="#">Fortnite</a></li>
              <li><a href="#">Dead by Daylight</a></li>
              <li><a href="#">Project Zomboid</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Контакты</h4>
            <ul className="contact-info">
              <li> talipova_k@iuca.kg</li>
              <li> +996 (773) 95-60-57</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>© 2024 GameHub.</p>
          <div className="footer-links">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer