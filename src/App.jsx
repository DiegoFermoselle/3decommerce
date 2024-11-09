// import { useState } from "react";
// import Footer from "./components/layout/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar/Navbar";
import "./components/layout/Navbar/navbar.css";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import CartContainer from "./components/pages/cart/CartConteiner";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailConteiner";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* ruta raiz "/" " */}
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:name" element={<ItemListContainer />} />
        <Route path="/cart" element={<CartContainer />} />
        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="*" element={<h2>404 not found</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// function App() {
//   // let darkMode = true;
//   // const cambiarModo = () => {
//   //   darkMode = !darkMode;
//   // };

//   // const [darkMode, setDarkMode] = useState(true);
//   // const cambiarModo = () => {
//   //   setDarkMode(!darkMode);
//   // };
//   return (
//     <div>
//       {/* <button onClick={cambiarModo}>cambiarModo </button> */}
//       <Navbar />
//       <ItemListContainer />
//       {/* <Footer /> */}
//     </div>
//   );
// }

// export default App;
