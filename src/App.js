import "./App.css";
import {Navbar,Footer} from "./components"
import {Outlet} from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
