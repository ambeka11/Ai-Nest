// App.jsx should render the page components via React Router’s <Outlet /> inside the layout.
import "./App.css";
import Navbar from "./components/navfoot/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
