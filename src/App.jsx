import {Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";

function App() {
  return (
    <main className="relative container px-4 md:px-0 mx-auto">
      <Sidebar />
      <Navbar />
      <Outlet  />
    </main>
  );
}

export default App;
