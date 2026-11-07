import { hero, socialLinks } from "@/data/resume";
import { socialIcons } from "@/components/ui/Icons";

export default function Footer() {
  return (
    <footer className="border-t border-line-soft">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 md:flex-row md:px-8">
        <div className="flex items-center gap-3">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-line bg-surface text-[11px] font-semibold text-ink">
            GM
          </span>
          <p className="text-sm text-muted">
            <span className="text-ink">{hero.name}</span> · Founding Engineer (FDE)
          </p>
        </div>
        <ul className="flex items-center gap-1">
          {socialLinks.map((link) => {
            const Icon = socialIcons[link.label as keyof typeof socialIcons];
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors hover:bg-surface hover:text-ink"
                >
                  <Icon />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
