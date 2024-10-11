import { Home } from "./components/pages/Home/Home";
import { Navbar } from "./components/Navbar";
import "./components/navbar.css";

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
