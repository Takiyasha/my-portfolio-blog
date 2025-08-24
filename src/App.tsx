import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-10">
        <Outlet />
      </main>
      <footer className="py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Name
      </footer>
    </div>
  );
}
