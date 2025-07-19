import React from "react";

const Home: React.FC = () => {
  React.useEffect(() => {document.body.style.overflow = "hidden";
    return () => {document.body.style.overflow = "auto";};}, []);

  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center home-bg"
      style={{background: "linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)",backgroundAttachment: "fixed"}}>
      <div className="container py-4">
        <div className="p-5 mb-4 bg-light rounded-3 shadow-sm">
          <div className="container-fluid py-3">
            <h1 className="display-5 fw-bold mb-3">Ласкаво просимо!</h1>
            <p className="col-md-8 fs-4">Вітаємо на нашому сайті! Ми спеціалізуємося на розробці сучасних веб-додатків, використовуючи найкращі практики та технології JavaScript.</p>
            <a href="/about" className="btn btn-primary btn-lg mt-3">Дізнатися більше про нас</a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>Наші послуги</h4>
            <ul>
              <li>Розробка веб-сайтів та додатків</li>
              <li>UI/UX дизайн</li>
              <li>Технічна підтримка</li>
              <li>Консультації з цифрової трансформації</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h4>Чому обирають нас?</h4>
            <ul>
              <li>Індивідуальний підхід</li>
              <li>Сучасні технології</li>
              <li>Висока якість та швидкість виконання</li>
              <li>Підтримка на всіх етапах проекту</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;