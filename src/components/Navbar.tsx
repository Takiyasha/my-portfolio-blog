import { NavLink } from "react-router-dom";

const classes = (active: boolean) =>
  `px-3 py-2 rounded-xl text-sm font-medium ${
    active ? "bg-gray-900 text-white" : "text-gray-700 hover:bg-gray-100"
  }`;

export default function Navbar() {
  return (
    <header className="border-b bg-white/80 backdrop-blur sticky top-0 z-10">
      <div className="max-w-5xl mx-auto h-16 px-4 flex items-center justify-between">
        <NavLink to="/" className="font-semibold text-lg">
          Your Name
        </NavLink>
        <nav className="flex gap-1">
          <NavLink to="/" end className={({ isActive }) => classes(isActive)}>
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => classes(isActive)}
          >
            Projects
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => classes(isActive)}>
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => classes(isActive)}
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
