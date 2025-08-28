// src/App.tsx
//import Navbar from "./components/Navbar";
//import { Outlet } from "react-router-dom";
//
//export default function App() {
//  return (
//    <div className="bg-[#ccced2] min-h-screen">
//      <Navbar />
//      <main className="pt-16">
//        <Outlet />
//      </main>
//    </div>
//  );
//}

import Navbar from "./components/Navbar";
import Home from "./pages/Home"; // if you're not using react-router yet

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Home />
    </div>
  );
}
