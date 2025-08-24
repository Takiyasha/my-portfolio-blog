import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="grid items-center gap-10 md:grid-cols-2">
      {/* Left: text */}
      <div className="space-y-6">
        <p className="text-sm tracking-wide text-gray-500">HELLO, I’M</p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Your Name<span className="text-gray-400"> — </span>
          <span className="text-gray-800">Frontend Developer</span>
        </h1>

        <p className="text-gray-700 max-w-xl">
          I build fast, clean web apps with <strong>React</strong>,{" "}
          <strong>TypeScript</strong>, and <strong>Tailwind</strong>. I enjoy
          designing simple UIs and shipping polished user experiences.
        </p>

        {/* Call to actions */}
        <div className="flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="px-5 py-2.5 rounded-xl bg-gray-900 text-white font-medium"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-xl border font-medium"
          >
            Contact Me
          </Link>
        </div>

        {/* Quick badges */}
        <ul className="flex flex-wrap gap-2 pt-2">
          {["React", "TypeScript", "Tailwind", "Vite"].map((t) => (
            <li
              key={t}
              className="text-xs px-2.5 py-1 rounded-full bg-gray-100 text-gray-700"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Right: avatar / placeholder */}
      <div className="md:justify-self-end">
        {/* If you have /public/avatar.jpg, uncomment the <img> and remove the placeholder div */}
        {/* <img
          src="/avatar.jpg"
          alt="Your Name portrait"
          className="h-56 w-56 md:h-64 md:w-64 rounded-3xl object-cover shadow-lg"
        /> */}

        {/* Gradient placeholder (shows if you don't have an image yet) */}
        <div className="h-56 w-56 md:h-64 md:w-64 rounded-3xl shadow-lg bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500"></div>
      </div>

      {/* Highlights row (full width on small screens) */}
      <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded-2xl border p-5">
          <p className="text-3xl font-bold">3+</p>
          <p className="text-sm text-gray-600">Personal projects</p>
        </div>
        <div className="rounded-2xl border p-5">
          <p className="text-3xl font-bold">Fast</p>
          <p className="text-sm text-gray-600">Vite + React stack</p>
        </div>
        <div className="rounded-2xl border p-5">
          <p className="text-3xl font-bold">Open</p>
          <p className="text-sm text-gray-600">Code on GitHub</p>
        </div>
      </div>
    </section>
  );
}
