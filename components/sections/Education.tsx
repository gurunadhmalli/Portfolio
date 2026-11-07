import { education } from "@/data/resume";
import SectionHeading from "@/components/ui/SectionHeading";
import { GraduationCap } from "@/components/ui/Icons";

export default function Education() {
  return (
    <section aria-labelledby="education-title" id="education" className="border-t border-line-soft py-24 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading id="education-title" eyebrow="Education" title="Foundations." />

        <article className="reveal rounded-2xl border border-line bg-bg-2">
          <div className="flex items-start gap-5 p-6 md:p-8">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-line bg-surface text-accent-hover">
              <GraduationCap width={20} height={20} />
            </span>
            <div>
              <h3 className="text-lg font-medium leading-snug text-ink md:text-xl">{education.degree}</h3>
              <p className="mt-1.5 text-[15px] text-muted">{education.school}</p>
            </div>
          </div>
          <dl className="grid grid-cols-3 divide-x divide-line-soft border-t border-line-soft text-sm">
            <div className="px-6 py-4 md:px-8">
              <dt className="text-xs text-muted">Period</dt>
              <dd className="mt-1 text-ink">{education.period}</dd>
            </div>
            <div className="px-6 py-4 md:px-8">
              <dt className="text-xs text-muted">Location</dt>
              <dd className="mt-1 text-ink">{education.location.split(",")[0]}</dd>
            </div>
            <div className="px-6 py-4 md:px-8">
              <dt className="text-xs text-muted">CGPA</dt>
              <dd className="mt-1 text-ink">{education.grade.replace("CGPA ", "")}</dd>
            </div>
          </dl>
        </article>
      </div>
    </section>
  );
}
