import { focusAreas, stats, summary } from "@/data/resume";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section aria-labelledby="about-title" id="about" className="border-y border-line-soft bg-bg-2 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <SectionHeading id="about-title" eyebrow="About" title="Engineering AI that holds up in the real world." />
            <div className="space-y-6 text-[17px] leading-[1.8] text-muted">
              {summary.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`reveal ${i === 0 ? "text-ink" : ""}`}
                  style={{ "--delay": `${i * 80}ms` } as React.CSSProperties}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <aside className="reveal lg:pt-2" aria-label="At a glance">
            <div className="overflow-hidden rounded-2xl border border-line bg-surface/50">
              <div className="flex items-center justify-between border-b border-line-soft px-6 py-4">
                <p className="font-mono text-xs text-muted">at-a-glance</p>
                <span className="flex gap-1.5" aria-hidden>
                  <span className="h-1.5 w-1.5 rounded-full bg-line" />
                  <span className="h-1.5 w-1.5 rounded-full bg-line" />
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>
              </div>

              <dl className="grid grid-cols-2">
                {stats.map((stat, i) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col-reverse border-line-soft px-6 py-6 ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""}`}
                  >
                    <dt className="mt-1.5 text-sm text-muted">{stat.label}</dt>
                    <dd className="text-3xl font-semibold tracking-tight text-ink">{stat.value}</dd>
                  </div>
                ))}
              </dl>

              <ul className="space-y-5 border-t border-line-soft px-6 py-6">
                {focusAreas.map((area) => (
                  <li key={area.title} className="flex gap-3.5">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    <div>
                      <h3 className="text-[15px] font-medium text-ink">{area.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{area.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
