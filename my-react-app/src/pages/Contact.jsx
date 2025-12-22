import { useState } from "react";
import "./Contact.css";

export default function Contacts() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Сообщение отправлено! (в учебных целях)");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contacts">
      <h1>Контакты</h1>
      <div className="contacts-container">
        <div className="contact-info">
          <h2>Свяжитесь с нами</h2>
          <div className="contact-item">
            <h3> Email</h3>
            <p>support@myblog.com</p>
          </div>
          <div className="contact-item">
            <h3> Телефон</h3>
            <p>+996 (555) 55-55-55</p>
          </div>
          <div className="contact-item">
            <h3> Адрес</h3>
            <p>г. Токмок, ул. Шамсинская 2</p>
          </div>
          <div className="social-links">
            <a href="#" className="social-link">Telegram</a>
            <a href="#" className="social-link">VK</a>
            <a href="#" className="social-link">GitHub</a>
          </div>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Форма обратной связи</h2>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Ваш Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Ваше сообщение"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Отправить</button>
        </form>
      </div>
    </div>
  );
}