import { CartWidget } from "../../common/cartWidget/Cartwidget";
import "./navbar.css";
import { Link } from "react-router-dom";

// import icono from "../../../assets/images/icono2.ico";

export const Navbar = ({ darkMode }) => {
  // console.log("navbar", darkMode);

  return (
    <>
      <div className="container-navbar">
        {/* <h1>3DCOMMERSE</h1> */}
        {/* <img src={icono} alt="Logo-Empresa" /> archivo desde el src*/}
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dcby1eejv/image/upload/v1728618862/csssts7ifrmwnukleslq.ico"
            alt="LogoEmpresa"
          />
        </Link>
        <ul>
          <Link to="/">TODO</Link>
          <Link to="/category/Filamentos">Filamentos</Link>
          <Link to="/category/Impresoras">Impresoras</Link>
          <Link to="/category/Arquitectura">Arquitectura</Link>
          <Link to="/category/Casa">Casa</Link>
        </ul>
        <CartWidget />
      </div>
    </>
  );
};
