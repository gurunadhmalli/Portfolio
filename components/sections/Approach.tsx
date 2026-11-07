import { approach } from "@/data/resume";
import SectionHeading from "@/components/ui/SectionHeading";
import { Compass, Gauge, Layers, Rocket, Wrench } from "@/components/ui/Icons";

const stepIcons = [Compass, Layers, Wrench, Gauge, Rocket];

export default function Approach() {
  return (
    <section aria-labelledby="approach-title" id="approach" className="border-y border-line-soft bg-bg-2 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          id="approach-title"
          eyebrow="Engineering approach"
          title="From a customer's problem to a system in production."
          align="center"
        />

        <ol className="relative grid gap-10 lg:grid-cols-5 lg:gap-6">
          {/* Connector: vertical on mobile, horizontal through the icons on desktop */}
          <span className="absolute bottom-6 left-6 top-6 w-px bg-line lg:hidden" aria-hidden />
          <span className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-line lg:block" aria-hidden />

          {approach.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <li
                key={step.title}
                className="reveal relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
                style={{ "--delay": `${i * 90}ms` } as React.CSSProperties}
              >
                <span className="relative z-10 grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-line bg-surface text-accent-hover">
                  <Icon width={20} height={20} />
                </span>
                <div className="lg:mt-6">
                  <p className="font-mono text-xs text-muted">0{i + 1}</p>
                  <h3 className="mt-1 text-lg font-medium text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
                  <p className="mt-3 font-mono text-[11px] text-accent-hover">{step.tools}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
