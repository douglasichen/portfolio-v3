import { useCallback, type ReactNode } from "react";

const winSvg =
  "w-4 h-4 stroke-current shrink-0 text-muted-foreground [stroke-width:1.6] transition-[stroke-width,color] duration-200 group-hover:[stroke-width:3.2] group-hover:text-foreground";
const chipSvg =
  "w-4 h-4 stroke-current shrink-0 [stroke-width:1.6] transition-[stroke-width] duration-200 group-hover:[stroke-width:3.2]";

function Icon({ className, children }: { className: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {children}
    </svg>
  );
}

const paths = {
  arrow: <path d="M7 17 17 7M8 7h9v9" />,
  email: (
    <>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 6 10-6" />
    </>
  ),
  github: (
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 20 4.8a4.9 4.9 0 0 0-.1-3.6s-1.1-.3-3.6 1.4a12.3 12.3 0 0 0-6.6 0C7.2.9 6.1 1.2 6.1 1.2A4.9 4.9 0 0 0 6 4.8 5.2 5.2 0 0 0 4.6 8.4c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V22" />
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  resume: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h8M8 9h2" />
    </>
  ),
};

const projects = [
  { href: "https://www.linkedin.com/feed/update/urn:li:activity:7424145830577729536/", label: "Resume Fact-Checker — 1.5K users" },
  { href: "https://github.com/douglasichen/ubceventscdk", label: "Free Food @ UBC — 3K visits" },
];

const wins = [
  { href: "https://devpost.com/software/dance-cv", label: "Best Game Project @ nwHacks" },
  { href: "https://devpost.com/software/elov", label: "Best Use of Fetch.ai @ KickStart" },
  { href: "https://devpost.com/software/chefmate-j0mh5d", label: "Best Use of ElevenLabs @ Hack the Coast" },
];

const links = [
  { href: "mailto:douglas@ichen.ca", label: "email", icon: paths.email, external: false },
  { href: "https://www.github.com/douglasichen", label: "github", icon: paths.github, external: true },
  { href: "https://www.linkedin.com/in/douglasichen/", label: "linkedin", icon: paths.linkedin, external: true },
  { href: "/resume.pdf", label: "resume", icon: paths.resume, external: true },
];

function LinkList({ items }: { items: { href: string; label: string }[] }) {
  return (
    <ul className="mt-3 list-none p-0">
      {items.map((it) => (
        <li key={it.href} className="mb-2">
          <a
            href={it.href}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-[0.65rem] leading-normal text-foreground no-underline"
          >
            <Icon className={winSvg}>{paths.arrow}</Icon>
            <span className="transition-[font-weight] duration-150 group-hover:font-semibold">{it.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function App() {
  const toggleTheme = useCallback(() => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      // ignore
    }
  }, []);

  return (
    <main className="mx-auto max-w-[40rem] px-6 py-24">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/pfp.png" alt="Douglas Chen" className="h-9 w-9 rounded-full object-cover grayscale" />
          <h1 className="m-0 text-lg font-normal">Douglas Chen</h1>
        </div>
        <button
          aria-label="Toggle dark mode"
          onClick={toggleTheme}
          className="cursor-pointer border-0 bg-transparent text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
        >
          ☀ / ☾
        </button>
      </header>

      <section className="mt-14 text-[1.05rem] leading-[1.75]">
        <p className="m-0 min-[608px]:whitespace-nowrap">
          Hi, I'm Doug(las). I like solving problems and living for the plot.
        </p>
      </section>

      <section className="mt-14">
        <p className="m-0 text-xs uppercase tracking-widest text-muted-foreground">Now</p>
        <p className="mt-3 leading-[1.6]">
          Interning at{" "}
          <a
            href="https://www.nimblerx.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground underline decoration-[color-mix(in_oklab,var(--muted-foreground)_35%,transparent)] underline-offset-[3px] transition-colors duration-200 hover:text-foreground hover:decoration-[var(--foreground)]"
          >
            NimbleRx (YC W15)
          </a>
          . Building the context harness and AI agents to automate customer triage.
        </p>
      </section>

      <section className="mt-14">
        <p className="m-0 text-xs uppercase tracking-widest text-muted-foreground">Projects</p>
        <LinkList items={projects} />
      </section>

      <section className="mt-14">
        <p className="m-0 text-xs uppercase tracking-widest text-muted-foreground">Hackathon Wins</p>
        <LinkList items={wins} />
      </section>

      <section className="mt-14">
        <div className="flex flex-wrap gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group inline-flex items-center gap-2 text-muted-foreground transition-colors duration-200 hover:text-foreground"
              {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}
            >
              <Icon className={chipSvg}>{l.icon}</Icon>
              <span className="underline decoration-[color-mix(in_oklab,currentColor_35%,transparent)] underline-offset-[3px] transition-[font-weight] duration-150 group-hover:font-semibold">
                {l.label}
              </span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
