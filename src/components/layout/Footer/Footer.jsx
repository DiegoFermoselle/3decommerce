import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__section">
          <h4 className="footer__title">Sobre Nosotros</h4>
          <p>Conoce más sobre nuestra empresa</p>
        </div>
        <div className="footer__section">
          <h4 className="footer__title">Enlaces</h4>
          <ul className="footer__links">
            <li>
              <a href="#inicio">Inicio</a>
            </li>
            <li>
              <a href="#productos">Productos</a>
            </li>
            <li>
              <a href="#contacto">Contacto</a>
            </li>
            <li>
              <a href="#faq">Preguntas Frecuentes</a>
            </li>
          </ul>
        </div>
        <div className="footer__section">
          <h4 className="footer__title">Síguenos</h4>
          <div className="footer__socials">
            <a href="#facebook" className="footer__icon">
              Facebook
            </a>
            <a href="#twitter" className="footer__icon">
              Twitter
            </a>
            <a href="#instagram" className="footer__icon">
              Instagram
            </a>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        &copy; 2024 TRISO - We Do Solutins. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
