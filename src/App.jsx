import { useState } from "react";
// import Footer from "./components/layout/Footer/Footer";
import { Navbar } from "./components/layout/Navbar/Navbar";
import "./components/layout/Navbar/navbar.css";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  // let darkMode = true;
  // const cambiarModo = () => {
  //   darkMode = !darkMode;
  // };

  // const [darkMode, setDarkMode] = useState(true);
  // const cambiarModo = () => {
  //   setDarkMode(!darkMode);
  // };
  return (
    <div>
      {/* <button onClick={cambiarModo}>cambiarModo </button> */}
      <Navbar />
      <ItemListContainer />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
