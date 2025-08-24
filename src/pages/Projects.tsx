import ProjectCard, { type Project } from "../components/ProjectCard";

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "This site! Built with Vite, React, TS, Tailwind v4.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    repo: "https://github.com/yourname/portfolio",
  },
  {
    title: "API Project",
    description: "Simple REST API with Node and Express.",
    tags: ["Node", "Express"],
    repo: "https://github.com/yourname/api-project",
  },
];

export default function Projects() {
  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
