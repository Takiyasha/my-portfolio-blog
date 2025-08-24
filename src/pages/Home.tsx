import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">Hi, I’m Your Name 👋</h1>
      <p className="text-gray-700 max-w-2xl">
        I build fast, clean web apps with React, TypeScript, and Tailwind.
      </p>
      <div className="flex gap-3">
        <Link
          to="/projects"
          className="px-4 py-2 rounded-xl bg-gray-900 text-white"
        >
          View Projects
        </Link>
        <Link to="/contact" className="px-4 py-2 rounded-xl border">
          Contact
        </Link>
      </div>
    </section>
  );
}
