// import { Footer } from "./components/layout/Footer/Footer";
import Footer from "./components/layout/Footer/Footer";
import { Navbar } from "./components/layout/Navbar/Navbar";
import "./components/layout/Navbar/navbar.css";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer greetings={"Bienvenido Buscador de precios"} />
      <Footer />
    </div>
  );
}

export default App;
