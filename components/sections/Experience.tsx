import { experience } from "@/data/resume";
import SectionHeading from "@/components/ui/SectionHeading";
import Chip from "@/components/ui/Chip";

export default function Experience() {
  return (
    <section aria-labelledby="experience-title" id="experience" className="border-t border-line-soft py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading id="experience-title" eyebrow="Experience" title="Where I've been building." />

        <ol className="relative ml-[5px] border-l border-line md:ml-[calc(200px+2.5rem+5px)]">
          {experience.map((job) => (
            <li key={job.company} className="relative pb-16 pl-8 last:pb-0 md:pl-10">
              <span
                className={`absolute -left-[6px] top-1.5 h-[11px] w-[11px] rounded-full border-2 ${
                  job.current ? "border-accent bg-accent shadow-[0_0_0_4px_rgba(59,130,246,0.15)]" : "border-line bg-bg"
                }`}
                aria-hidden
              />

              <p className="mb-3 font-mono text-xs text-muted md:absolute md:-left-[calc(200px+2.5rem)] md:top-1 md:mb-0 md:w-[200px] md:text-right">
                {job.period}
              </p>

              <div className="reveal">
                <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">{job.role}</h3>
                <p className="mt-1.5 text-[15px]">
                  <span className="text-accent-hover">{job.company}</span>
                  <span className="text-muted"> · {job.location}</span>
                  {job.current && (
                    <span className="ml-2.5 rounded-full border border-line-soft bg-bg-2 px-2 py-0.5 text-xs text-muted">Current</span>
                  )}
                </p>
              </div>

              <div className="mt-8 space-y-8">
                {job.projects.map((project) => (
                  <div key={project.name} className="reveal rounded-xl border border-line-soft bg-bg-2 p-6">
                    <h4 className="text-base font-medium text-ink">
                      {project.name} <span className="font-normal text-muted">— {project.tagline.replace(/^&\s*/, "")}</span>
                    </h4>
                    <ul className="mt-4 space-y-2.5">
                      {project.highlights.map((h) => (
                        <li key={h} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                          <span className="mt-[0.7em] h-px w-2.5 shrink-0 bg-accent" aria-hidden />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-5 flex flex-wrap gap-1.5 border-t border-line-soft pt-5" aria-label="Tech stack">
                      {project.stack.map((tech) => (
                        <Chip key={tech}>{tech}</Chip>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
