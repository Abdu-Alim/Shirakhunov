import "./About.css";

export default function About() {
  return (
    <div className="about">
      <h1>О нашем проекте</h1>
      <div className="about-content">
        <div className="about-card">
          <h2>Наша миссия</h2>
          <p>Создать удобную платформу для блогеров и читателей, где каждый может делиться знаниями и находить интересный контент.</p>
        </div>
        <div className="about-card">
          <h2>Технологии</h2>
          <ul>
            <li>React</li>
            <li>React Router DOM</li>
            <li>Context API</li>
            <li>Axios для HTTP-запросов</li>
            <li>JSONPlaceholder API</li>
          </ul>
        </div>
      </div>
    </div>
  );
}