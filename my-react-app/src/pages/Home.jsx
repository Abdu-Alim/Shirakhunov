import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Добро пожаловать в My Blog</h1>
        <p>Платформа для публикации и обсуждения интересных статей</p>
        <div className="features">
          <div className="feature-card">
            <h3>Создавайте посты</h3>
            <p>Делитесь своими мыслями и идеями</p>
          </div>
          <div className="feature-card">
            <h3>Открытый API</h3>
            <p>Интеграция с JSONPlaceholder</p>
          </div>
          <div className="feature-card">
            <h3>Безопасность</h3>
            <p>Регистрация и авторизация</p>
          </div>
        </div>
      </section>
    </div>
  );
}