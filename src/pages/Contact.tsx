export default function Contact() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-bold">Contact</h1>
      <p className="text-gray-700">
        Email me at{" "}
        <a className="underline" href="mailto:you@example.com">
          you@example.com
        </a>
        .
      </p>
      <p className="text-gray-700">
        Find me on{" "}
        <a
          className="underline"
          href="https://github.com/yourname"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        and
        <a
          className="underline"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          LinkedIn
        </a>
        .
      </p>
    </section>
  );
}
