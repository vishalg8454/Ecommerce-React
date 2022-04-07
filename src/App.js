import "./App.css";
import { Navbar, Footer, Toast } from "./components";
import { Outlet } from "react-router-dom";
import { useToast } from "./context/toast-context";

function App() {
  const { show } = useToast();
  return (
    <>
      {show && <Toast />}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
