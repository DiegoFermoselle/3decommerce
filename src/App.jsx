import { Navbar } from "./components/layout/Navbar/Navbar";
import { Home } from "./components/pages/Home/Home";
import "./components/layout/Navbar/navbar.css";

function App() {
  return (
    <div>
      <Navbar />
      <Home />

      <footer>
        <ul></ul>
      </footer>
    </div>
  );
}

export default App;
