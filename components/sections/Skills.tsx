import { skillGroups } from "@/data/resume";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillIcons } from "@/components/ui/Icons";

export default function Skills() {
  return (
    <section aria-labelledby="skills-title" id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading id="skills-title" eyebrow="Skills" title="The stack behind the systems." />

        <div className="grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = skillIcons[group.icon];
            return (
              <div
                key={group.category}
                className="reveal flex flex-col rounded-2xl border border-line bg-bg-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.8)]"
                style={{ "--delay": `${(i % 3) * 70}ms` } as React.CSSProperties}
              >
                <div className="flex items-center gap-3.5">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface text-accent-hover">
                    <Icon width={19} height={19} />
                  </span>
                  <h3 className="text-base font-medium text-ink">{group.category}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-x-1.5 gap-y-2">
                  {group.skills.map((skill) => (
                    <li key={skill} className="rounded-md bg-surface/70 px-2.5 py-1 text-[13px] text-muted">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
