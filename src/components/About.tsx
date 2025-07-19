import React from "react";

const About: React.FC = () => {
  React.useEffect(() => {document.body.style.overflow = "hidden";
    return () => {document.body.style.overflow = "auto";};}, []);

  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center about-bg"
      style={{background: "linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)",backgroundAttachment: "fixed"}}>
      <div className="container py-4">
        <h2 className="mb-4">Про нас</h2>
        <p className="lead">Ми — сучасна команда, яка створює якісні веб-додатки на основі JavaScript та сучасних фреймворків.</p>
        <div className="mb-4">
          <h4>Наша місія</h4>
          <p>Допомагати бізнесу зростати завдяки інноваційним цифровим рішенням, забезпечуючи високу якість, швидкість та підтримку.</p>
        </div>
        <div className="mb-4">
          <h4>Наші переваги</h4>
          <ul className="list-group">
            <li className="list-group-item">Досвідчена команда розробників</li>
            <li className="list-group-item">Індивідуальний підхід до кожного клієнта</li>
            <li className="list-group-item">Використання сучасних технологій</li>
            <li className="list-group-item">Підтримка та супровід проектів</li>
          </ul>
        </div>
        <div>
          <h4>Зв'яжіться з нами</h4>
          <p>Ми завжди відкриті до нових ідей та співпраці!</p>
        </div>
      </div>
    </div>
  );
};

export default About;