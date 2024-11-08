import { Cartwidget } from "../../common/cartWidget/Cartwidget";
import "./navbar.css";
// import icono from "../../../assets/images/icono2.ico";

export const Navbar = ({ darkMode }) => {
  console.log("navbar", darkMode);

  return (
    <div className="container-navbar">
      {/* <h1>3DCOMMERSE</h1> */}
      {/* <img src={icono} alt="Logo-Empresa" /> archivo desde el src*/}
      <img
        src="https://res.cloudinary.com/dcby1eejv/image/upload/v1728618862/csssts7ifrmwnukleslq.ico"
        alt="LogoEmpresa"
      />

      <ul>
        <button className="navbar__button">Decoracíon</button>
        <button className="navbar__button">Arte</button>
        <button className="navbar__button">Moda</button>
        <button className="navbar__button">Joyas</button>
        <button className="navbar__button">Casa</button>
        <button className="navbar__button">Arquitectura</button>
      </ul>
      <Cartwidget />
    </div>
  );
};
