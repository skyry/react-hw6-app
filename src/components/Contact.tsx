import React from "react";

const Contact: React.FC = () => {
  React.useEffect(() => {document.body.style.overflow = "hidden";
    return () => {document.body.style.overflow = "auto"};}, []);

  return (
    <div
      className="container-fluid min-vh-100 d-flex justify-content-center contact-bg"
      style={{background: "linear-gradient(120deg, #e0eafc 0%, #cfdef3 100%)",backgroundAttachment: "fixed"}}>
      <div className="container py-4">
        <h2 className="mb-4">Зв'яжіться з нами</h2>
        <div className="mb-4">
          <p><strong>Телефон:</strong> +38 (099) 123-45-67</p>
          <p><strong>Email:</strong> info@google.com</p>
          <p><strong>Адреса:</strong> м. Київ, вул. Окіпної, 3</p>
        </div>
        <h4 className="mb-3">Форма зворотного зв'язку</h4>
        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Ім'я</label>
            <input type="text" className="form-control" id="name" placeholder="Ваше ім'я" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Ваш email" />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Повідомлення</label>
            <textarea className="form-control" id="message" rows={4} placeholder="Ваше повідомлення"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Відправити</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
