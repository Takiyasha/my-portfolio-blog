// src/components/Navbar.tsx
//import { Link, NavLink } from "react-router-dom";
//import Container from "./Container";
//
////const link = "text-white/90 hover:text-white transition-colors";
//
//const link = ({ isActive }: { isActive: boolean }) =>
//  `text-white font-medium hover:underline ${isActive ? "underline" : ""}`;
//
//export default function Navbar() {
//  return (
//    <header className="bg-[#54748e] sticky top-0 z-50">
//      <Container>
//        <div className="col-span-6 flex items-center py-10">
//          <Link to="/" className="text-white font-bold text-2xl tracking-wide">
//            ASCANODE
//          </Link>
//        </div>
//
//        <nav className="border-4 border-red-500 col-span-6 flex items-center justify-end gap-10 py-10">
//          <NavLink to="/projects" className={link}>
//            Projects
//          </NavLink>
//          <NavLink to="/about" className={link}>
//            About
//          </NavLink>
//          <NavLink to="/contact" className={link}>
//            Contact
//          </NavLink>
//        </nav>
//      </Container>
//    </header>
//  );
//}

import { useState } from "react";
import SideMenu from "./SideMenu";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40">
        <nav className="mx-auto max-w-screen-xl px-6 md:px-10 py-6 flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-xl md:text-2xl font-bold tracking-wide">
            ASCANODE
          </a>

          {/* Palm icon button */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="p-2 rounded-md hover:bg-white/10 transition"
          >
            <img
              src="/icons/PalmTree.svg"
              alt="Palm tree"
              className="w-8 h-8"
            />
          </button>
        </nav>
      </header>

      <SideMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
