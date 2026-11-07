import { projects, type Project } from "@/data/resume";
import SectionHeading from "@/components/ui/SectionHeading";
import Chip from "@/components/ui/Chip";
import { ExternalLink, GitHub } from "@/components/ui/Icons";

// Architecture diagram used as the project's preview image
function Preview({ project }: { project: Project }) {
  const highlight = Math.min(2, project.diagram.length - 1);

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-line-soft bg-bg">
      <div className="bg-grid-sm absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]" aria-hidden />
      <div
        className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow), transparent 70%)" }}
        aria-hidden
      />

      <div className="absolute inset-x-4 top-3.5 flex items-center justify-between font-mono text-[10px] text-muted">
        <span>{project.category.toLowerCase()}</span>
        <span className="flex gap-1" aria-hidden>
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
          <span className="h-1.5 w-1.5 rounded-full bg-line" />
        </span>
      </div>

      <ol
        className="absolute inset-x-4 top-1/2 flex -translate-y-1/2 items-center sm:inset-x-8"
        aria-label={`Architecture: ${project.diagram.join(" to ")}`}
      >
        {project.diagram.map((node, i) => (
          <li key={node} className="flex min-w-0 flex-1 items-center last:flex-none">
            <span
              className={`rounded-lg border px-2 py-2 text-center font-mono text-[10px] leading-tight sm:px-3 sm:text-[11px] ${
                i === highlight
                  ? "border-accent bg-accent/15 text-ink shadow-[0_0_24px_var(--glow)]"
                  : "border-line bg-bg-2 text-muted"
              }`}
            >
              {node}
            </span>
            {i < project.diagram.length - 1 && (
              <span className="relative mx-1 h-px min-w-3 flex-1 bg-line sm:mx-1.5" aria-hidden>
                <span className="absolute right-0 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-accent" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

function Links({ project }: { project: Project }) {
  const { github, demo } = project.links ?? {};
  if (!github && !demo) return null;

  return (
    <div className="flex items-center gap-4 text-sm">
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-ink">
          <GitHub width={16} height={16} /> Code
        </a>
      )}
      {demo && (
        <a href={demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-ink">
          <ExternalLink width={16} height={16} /> Live demo
        </a>
      )}
    </div>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <article className="reveal group grid gap-8 rounded-2xl border border-line bg-bg-2 p-5 transition-colors hover:border-accent/50 md:col-span-2 md:p-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
      <Preview project={project} />
      <div className="flex flex-col py-1 lg:pr-2">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent-hover">Featured · {project.context}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">{project.title}</h3>
        <p className="mt-3 leading-relaxed text-muted">{project.problem}</p>

        {project.built && (
          <ul className="mt-5 space-y-2">
            {project.built.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/85">
                <span className="mt-[0.6em] h-1 w-3 shrink-0 rounded-full bg-accent" aria-hidden />
                {item}
              </li>
            ))}
          </ul>
        )}

        <p className="mt-5 border-l-2 border-accent pl-4 text-sm leading-relaxed text-ink">{project.impact}</p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
          <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
            {project.stack.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </ul>
          <Links project={project} />
        </div>
      </div>
    </article>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article
      className="reveal group flex flex-col rounded-2xl border border-line bg-bg-2 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
      style={{ "--delay": `${(index % 2) * 90}ms` } as React.CSSProperties}
    >
      <Preview project={project} />
      <div className="flex flex-1 flex-col px-1 pt-6">
        <p className="text-xs text-muted">{project.context}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">{project.title}</h3>
        <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{project.summary}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink/90">
          <span className="text-accent-hover">Impact — </span>
          {project.impact}
        </p>
        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-6">
          <ul className="flex flex-wrap gap-1.5" aria-label="Tech stack">
            {project.stack.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </ul>
          <Links project={project} />
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section aria-labelledby="work-title" id="work" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="work-title"
          eyebrow="Selected work"
          title="Systems I've designed and shipped."
          description="Production AI across agents, retrieval, MCP and real-time ML, built for real users at real companies."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((project) => (
            <FeaturedCard key={project.title} project={project} />
          ))}
          {rest.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
