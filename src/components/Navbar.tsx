// src/components/ui/Navbar.tsx
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";

const link = "text-white/90 hover:text-white transition-colors";

export default function Navbar(): JSX.Element {
  return (
    <header className="bg-[#ccced2] sticky top-0 z-50">
      <Container>
        <div className="col-span-6 flex items-center py-10">
          <Link to="/" className="text-white font-bold text-2xl tracking-wide">
            ASCANODE
          </Link>
        </div>

        <nav className="col-span-6 flex items-center justify-end gap-10 py-10">
          <NavLink to="/projects" className={link}>
            Projects
          </NavLink>
          <NavLink to="/about" className={link}>
            About
          </NavLink>
          <NavLink to="/contact" className={link}>
            Contact
          </NavLink>
        </nav>
      </Container>
    </header>
  );
}
