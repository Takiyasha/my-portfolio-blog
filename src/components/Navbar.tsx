import Container from "./Container";

export default function Navbar() {
  return (
    <header className="bg-[#ccced2] sticky top-0 z-50">
      <Container>
        {/* Logo */}
        <a
          href="/"
          className="col-span-6 text-white font-extrabold tracking-wide text-2xl flex items-center"
        >
          ASCANODE
        </a>

        {/* Links */}
        <nav className="col-span-6 flex justify-end gap-12 text-lg font-medium text-white items-center py-8">
          <a href="#projects" className="hover:opacity-80">
            Projects
          </a>
          <a href="#about" className="hover:opacity-80">
            About
          </a>
          <a href="#contact" className="hover:opacity-80">
            Contact
          </a>
        </nav>
      </Container>
    </header>
  );
}
