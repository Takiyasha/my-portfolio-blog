//SideMenu.tsx
import { useEffect } from "react";

type SideMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function SideMenu({ open, onClose }: SideMenuProps) {
  // Lock body scroll while menu is open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div
      // Full-screen overlay container
      className={[
        "fixed inset-0 z-50 transition-all duration-300",
        open ? "pointer-events-auto" : "pointer-events-none",
      ].join(" ")}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={[
          "absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity",
          open ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />

      {/* Sliding layer that holds the menu content */}
      <div
        className={[
          "absolute inset-0 transition-transform duration-300",
          // slide in from the right; change to -translate-x-full if you want from the left
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* FULL PAGE CONTENT */}
        <div className="relative w-full h-full grid md:grid-cols-2 gap-8 p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="absolute right-6 top-6 text-white/80 hover:text-white text-3xl"
          >
            ×
          </button>

          {/* Big links */}
          <div className="flex flex-col justify-center space-y-10">
            <a
              href="/projects"
              onClick={onClose}
              className="text-white font-bold leading-none text-5xl md:text-7xl hover:opacity-80"
            >
              Projects
            </a>
            <a
              href="/contact"
              onClick={onClose}
              className="text-white font-bold leading-none text-5xl md:text-7xl hover:opacity-80"
            >
              Contact
            </a>
            <a
              href="/about"
              onClick={onClose}
              className="text-white font-bold leading-none text-5xl md:text-7xl hover:opacity-80"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

//{/* Image side (optional; hide on small screens) */}
//<div className="hidden md:block">
//  <img
//    src="/images/char.jpg" // replace with your image path
//    alt=""
//    className="w-full h-full object-cover rounded-xl"
//  />
//</div>
