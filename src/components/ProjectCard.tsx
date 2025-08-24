export type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-2xl border p-5 hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{project.title}</h3>
      <p className="mt-1 text-sm text-gray-600">{project.description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded-full">
            {t}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-3">
        {project.link && (
          <a
            className="underline text-sm"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        )}
        {project.repo && (
          <a
            className="underline text-sm"
            href={project.repo}
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        )}
      </div>
    </article>
  );
}
