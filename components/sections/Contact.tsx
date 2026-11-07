import { email, phone, socialLinks } from "@/data/resume";
import { Mail, Phone, socialIcons } from "@/components/ui/Icons";
import CopyEmailButton from "@/components/ui/CopyEmailButton";

export default function Contact() {
  return (
    <section
      aria-labelledby="contact-title"
      id="contact"
      className="relative overflow-hidden border-t border-line-soft bg-bg-2 py-28 md:py-40"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(ellipse, var(--glow), transparent 65%)" }}
        aria-hidden
      />
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative mx-auto max-w-3xl px-5 text-center md:px-8">
        <p className="reveal mb-5 flex items-center justify-center gap-3 text-sm font-medium text-accent-hover">
          <span className="h-px w-6 bg-accent" aria-hidden />
          Contact
          <span className="h-px w-6 bg-accent" aria-hidden />
        </p>

        <h2
          id="contact-title"
          className="reveal text-4xl font-semibold leading-[1.06] tracking-[-0.035em] text-ink sm:text-5xl md:text-6xl"
        >
          Let&apos;s build something intelligent together.
        </h2>

        <p className="reveal mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Open to founding and forward deployed engineering roles, agentic products and production RAG or MCP work.
        </p>

        <div className="reveal mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${email}`}
            className="inline-flex h-12 items-center gap-2.5 rounded-lg bg-accent-button px-7 text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            <Mail /> Get in touch
          </a>
          <CopyEmailButton email={email} />
        </div>

        <div className="reveal mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[15px]">
          <a href={`mailto:${email}`} className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink">
            <Mail width={17} height={17} className="text-accent-hover" /> {email}
          </a>
          <a href={phone.href} className="inline-flex items-center gap-2 text-muted transition-colors hover:text-ink">
            <Phone width={17} height={17} className="text-accent-hover" /> {phone.display}
          </a>
        </div>

        <ul className="reveal mt-12 flex items-center justify-center gap-6">
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
    </section>
  );
}
