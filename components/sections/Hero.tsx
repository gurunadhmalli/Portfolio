import Image from "next/image";
import { hero, resumeUrl, socialLinks } from "@/data/resume";
import { ArrowRight, Download, MapPin, socialIcons } from "@/components/ui/Icons";

// Thin concentric rings and tick marks behind the portrait
function Geometry() {
  return (
    <svg
      className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 text-line"
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden
    >
      <circle cx="300" cy="300" r="290" stroke="currentColor" strokeOpacity="0.35" />
      <circle cx="300" cy="300" r="225" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="2 6" />
      <circle cx="300" cy="300" r="160" stroke="currentColor" strokeOpacity="0.3" />
      <path d="M300 0v24M300 576v24M0 300h24M576 300h24" stroke="var(--accent)" strokeOpacity="0.7" />
      <circle cx="505" cy="140" r="3" fill="var(--accent)" />
      <circle cx="96" cy="452" r="2.5" fill="var(--accent-hover)" fillOpacity="0.7" />
    </svg>
  );
}

function Portrait() {
  return (
    <div className="relative mx-auto w-full max-w-[400px]">
      <Geometry />
      <div className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-1.5 shadow-[0_40px_80px_-40px_rgba(0,0,0,0.8)]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
          <Image
            src={hero.photo}
            alt={`Portrait of ${hero.name}`}
            fill
            sizes="(min-width: 1024px) 400px, 85vw"
            loading="eager"
            fetchPriority="high"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="flex items-center justify-between px-3.5 py-3">
          <div>
            <p className="text-sm font-medium text-ink">{hero.name}</p>
            <p className="text-xs text-muted">Founding Engineer · FDE</p>
          </div>
          <span className="inline-flex items-center gap-1 text-xs text-muted">
            <MapPin width={14} height={14} /> {hero.location}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative flex min-h-[min(100svh,980px)] items-center overflow-hidden pb-16 pt-28 lg:pt-20"
    >
      <div className="bg-grid pointer-events-none absolute inset-0 -z-20" aria-hidden />
      <div
        className="pointer-events-none absolute right-[-10%] top-[10%] -z-20 h-[560px] w-[560px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, var(--glow), transparent 70%)" }}
        aria-hidden
      />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-16 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
        <div>
          <p className="rise mb-8 inline-flex items-center gap-2 rounded-full border border-line-soft bg-bg-2 px-3 py-1 text-xs text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
            {hero.currently}
          </p>

          <h1
            id="hero-title"
            className="rise text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.035em] text-ink sm:text-6xl lg:text-[4.5rem]"
            style={{ "--delay": "80ms" } as React.CSSProperties}
          >
            {hero.headline} <span className="text-accent-hover">{hero.headlineEmphasis}</span>
          </h1>

          <p
            className="rise mt-7 max-w-xl text-lg leading-relaxed text-muted"
            style={{ "--delay": "160ms" } as React.CSSProperties}
          >
            I&apos;m <span className="text-ink">{hero.name}</span>, a {hero.role}. {hero.intro}
          </p>

          <div
            className="rise mt-10 flex flex-wrap items-center gap-3"
            style={{ "--delay": "240ms" } as React.CSSProperties}
          >
            <a
              href="#work"
              className="group inline-flex h-12 items-center gap-2 rounded-lg bg-accent-button px-6 text-sm font-medium text-white transition-colors hover:bg-accent"
            >
              View my work
              <ArrowRight width={16} height={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-lg border border-line px-6 text-sm font-medium text-ink transition-colors hover:border-accent-hover hover:bg-surface/60"
            >
              <Download width={16} height={16} /> Résumé
            </a>
          </div>

          <ul
            className="rise mt-12 flex items-center gap-5"
            style={{ "--delay": "320ms" } as React.CSSProperties}
          >
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.label as keyof typeof socialIcons];
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-muted transition-colors hover:text-accent-hover"
                  >
                    <Icon width={20} height={20} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="rise" style={{ "--delay": "160ms" } as React.CSSProperties}>
          <Portrait />
        </div>
      </div>
    </section>
  );
}
