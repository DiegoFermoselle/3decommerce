import { Cartwidget } from "../../common/cartWidget/Cartwidget";
import "./navbar.css";
// import icono from "../../../assets/images/icono2.ico";

export const Navbar = () => {
  return (
    <div className="container-navbar">
      {/* <h1>3DCOMMERSE</h1> */}
      {/* <img src={icono} alt="Logo-Empresa" /> archivo desde el src*/}
      <img
        src="https://res.cloudinary.com/dcby1eejv/image/upload/v1728618862/csssts7ifrmwnukleslq.ico"
        alt="LogoEmpresa"
      />

      <ul>
        <button>Decoracíon</button>
        <button>Arte</button>
        <button>Moda</button>
        <button>Joyas</button>
        <button>Casa</button>
        <button>Arquitectura</button>
      </ul>
      <Cartwidget />
    </div>
  );
};
