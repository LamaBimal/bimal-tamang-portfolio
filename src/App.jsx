import React, { useEffect, useMemo, useState } from "react";
import { useTranslation } from "./i18n";

const GITHUB_USERNAME = "lamabimal";

const profile = {
  name: "Bimal Tamang",
  title: "Solution Architect",
  location: "Kathmandu, Nepal",
  email: "bimaltamang1234@gmail.com",
  github: "https://github.com/lamabimal",
  linkedin: "https://www.linkedin.com/in/bimaltamang/",
  company: "Cedar Gate Technologies",
};

const fallbackProfile = {
  login: GITHUB_USERNAME,
  name: profile.name,
  avatar_url: "https://avatars.githubusercontent.com/lamabimal",
  bio: null,
  location: profile.location,
  public_repos: 43,
  followers: 0,
  following: 0,
  html_url: profile.github,
};

const fallbackRepos = [
  {
    id: 1,
    name: "data-engineering-journey",
    html_url: "https://github.com/lamabimal/data-engineering-journey",
    description:
      "Learning and implementation repository focused on production-ready data engineering concepts and practices.",
    language: "Markdown",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-01-01T00:00:00Z",
    topics: ["data-engineering", "learning", "portfolio"],
  },
  {
    id: 2,
    name: "python_langgraph",
    html_url: "https://github.com/lamabimal/python_langgraph",
    description:
      "Hands-on experiments for learning LangGraph implementation and agentic AI workflow concepts.",
    language: "Jupyter Notebook",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-01-01T00:00:00Z",
    topics: ["python", "langgraph", "ai-agents"],
  },
  {
    id: 3,
    name: "Java-OOP-StarterKit",
    html_url: "https://github.com/lamabimal/Java-OOP-StarterKit",
    description:
      "Beginner-friendly Java examples demonstrating object-oriented programming concepts and clean code foundations.",
    language: "Java",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-01-01T00:00:00Z",
    topics: ["java", "oop", "starter-kit"],
  },
  {
    id: 4,
    name: "retry-pattern-java",
    html_url: "https://github.com/lamabimal/retry-pattern-java",
    description:
      "Dynamic retry logic implementation in Java 8 for resilient enterprise service design.",
    language: "Java",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-01-01T00:00:00Z",
    topics: ["java", "retry-pattern", "resilience"],
  },
  {
    id: 5,
    name: "JasperReport",
    html_url: "https://github.com/lamabimal/JasperReport",
    description:
      "Sample project for JasperReports, reflecting reporting and enterprise data presentation experience.",
    language: "Java",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-01-01T00:00:00Z",
    topics: ["java", "jasperreports", "reporting"],
  },
  {
    id: 6,
    name: "covid-19",
    html_url: "https://github.com/lamabimal/covid-19",
    description:
      "React application that visualizes COVID-19 status data with graphical representation.",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    updated_at: "2026-01-01T00:00:00Z",
    topics: ["react", "javascript", "data-visualization"],
  },
];

const highlights = [
  "10+ years in software development, architecture, and technical leadership",
  "Strong background in Java, backend engineering, cloud, and enterprise application design",
  "Hands-on experience across AWS, EMR, Snowflake, Docker, Kubernetes, Airflow, and reporting systems",
  "Currently exploring AI integrations, Snowflake Cortex, LangGraph, and enterprise GenAI use cases",
];

const skillGroups = [
  {
    title: "Backend & Architecture",
    icon: "server",
    skills: ["Java", "Spring Boot", "Vert.x", "REST APIs", "Microservices", "Design Patterns", "Clean Architecture"],
  },
  {
    title: "Cloud & Data Engineering",
    icon: "cloud",
    skills: ["AWS", "AWS EMR", "S3", "Lambda", "Docker", "Kubernetes", "Airflow", "Snowflake"],
  },
  {
    title: "Frontend & Full Stack",
    icon: "code",
    skills: ["React", "Next.js", "AngularJS", "Node.js", "JavaScript", "TypeScript", "Responsive UI"],
  },
  {
    title: "Data, AI & Reporting",
    icon: "brain",
    skills: ["JasperReports", "Dashboards", "Data Visualization", "LangGraph", "Snowflake Cortex", "AI Integrations"],
  },
];

const experience = [
  {
    role: "Solutions Architect",
    company: "Cedar Gate Technologies",
    start: "2023-03-01",
    end: null, // Present
    location: "Kathmandu, Nepal (Hybrid)",
    points: [
      "Design scalable technical solutions and guide implementation teams.",
      "Review architecture, coding standards, and engineering quality practices.",
      "Research and evaluate modern cloud, data, and AI technology stacks (AWS, Python).",
    ],
  },
  {
    role: "Senior Engineering Manager",
    company: "Cedar Gate Technologies",
    start: "2023-01-01",
    end: "2023-03-31",
    location: "Kathmandu, Nepal",
    points: [
      "Managed engineering teams and delivery for critical projects.",
      "Coached technical leads and improved release processes.",
    ],
  },
  {
    role: "Engineering Manager",
    company: "Cedar Gate Technologies",
    start: "2022-01-01",
    end: "2022-12-31",
    location: "Kathmandu, Nepal",
    points: [
      "Owned technical delivery and cross-team coordination.",
      "Drove architecture reviews and mentoring programs.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Cedar Gate Technologies",
    start: "2020-12-01",
    end: "2022-01-31",
    location: "Sanepa, Kathmandu",
    points: [
      "Built backend services and integrations.",
      "Contributed to system design, testing and deployments.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Deerwalk Inc.",
    start: "2020-01-01",
    end: "2020-11-30",
    location: "Kathmandu, Nepal",
    points: [
      "Implemented features for enterprise healthcare/analytics products.",
      "Worked across frontend and backend components.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Deerwalk Inc.",
    start: "2017-01-01",
    end: "2019-12-31",
    location: "Siphal, Kathmandu",
    points: [
      "Developed client-side web pages and UI features.",
      "Gained experience in real-time software development and UX improvements.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Deerwalk Inc.",
    start: "2015-12-01",
    end: "2016-12-31",
    location: "Siphal, Kathmandu",
    points: [
      "Worked on early-career engineering tasks and learned real-world development practices.",
    ],
  },
];

const education = [
  "Master's in Computer Science — Lincoln University College",
  "Bachelor's in Computer Engineering — Tribhuvan University / Himalaya College of Engineering",
];

const certifications = [
  {
    title: 'Software Architecture: From Developer to Architect',
    issuer: 'LinkedIn Learning',
    url: 'https://www.linkedin.com/learning/certificates/7b385498b923911c2ee7bf8c5848b3c2717a5f5d4b13055fb5a54ab106baa4ee?u=190667273',
  },
  {
    title: 'Data Engineering Professional Certificate by Snowflake',
    issuer: 'LinkedIn Learning',
    url: 'https://www.linkedin.com/learning/certificates/f9dc5cb2cf58d31959738eb0889056f52701193e9dc4af54dc698757f265518a?u=190667273',
  },
];

const CV_FILE = "Bimal_Tamang_CV.pdf";
const cvHref = `${import.meta.env.BASE_URL}${encodeURIComponent(CV_FILE)}`;

function normalizeRepos(repos) {
  if (!Array.isArray(repos)) return fallbackRepos;

  const cleanedRepos = repos
    .filter((repo) => repo && repo.name && repo.html_url)
    .filter((repo) => !repo.fork)
    .filter((repo) => !repo.name.toLowerCase().includes("test"))
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      html_url: repo.html_url,
      description: repo.description,
      language: repo.language,
      stargazers_count: Number(repo.stargazers_count || 0),
      forks_count: Number(repo.forks_count || 0),
      updated_at: repo.updated_at || new Date().toISOString(),
      topics: Array.isArray(repo.topics) ? repo.topics : [],
    }))
    .sort((a, b) => {
      const scoreA =
        a.stargazers_count * 5 +
        a.forks_count * 2 +
        new Date(a.updated_at).getTime() / 1_000_000_000;
      const scoreB =
        b.stargazers_count * 5 +
        b.forks_count * 2 +
        new Date(b.updated_at).getTime() / 1_000_000_000;
      return scoreB - scoreA;
    })
    .slice(0, 6);

  return cleanedRepos.length > 0 ? cleanedRepos : fallbackRepos;
}

function formatDate(date) {
  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) return "recently";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
  }).format(parsedDate);
}

function formatYearRange(item) {
  // Accepts start/end as ISO date strings or startYear/endYear as numbers/strings
  const start = item.start || item.startYear || item.from;
  const end = item.end || item.endYear || item.to;

  if (!start && !end) return null;

  const fmt = (v) => {
    if (!v) return null;
    const asNum = Number(v);
    if (!Number.isNaN(asNum) && String(asNum).length === 4) return String(v);
    const d = new Date(v);
    if (!Number.isNaN(d.getTime())) return formatDate(v);
    return String(v);
  };

  const s = fmt(start);
  const e = fmt(end);
  if (s && e) return `${s} — ${e}`;
  if (s && !e) return `${s} — Present`;
  if (!s && e) return `Until ${e}`;
  return null;
}

function getExternalLinkProps(href) {
  const isExternal = href?.startsWith("http");
  return isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
}

function Card({ className = "", children }) {
  return (
    <div className={`rounded-[1.75rem] border border-slate-200/70 bg-white shadow-sm shadow-slate-200/60 ${className}`}>
      {children}
    </div>
  );
}

function Button({ children, href, variant = "primary", className = "", ...props }) {
  const variants = {
    primary: "bg-slate-950 text-white hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-300",
    accent: "bg-sky-400 text-white hover:-translate-y-0.5 hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-200",
    outline: "border border-slate-300 bg-white text-slate-800 hover:-translate-y-0.5 hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700",
    light: "bg-white text-slate-950 hover:-translate-y-0.5 hover:bg-slate-100",
    darkOutline: "border border-white/20 bg-transparent text-white hover:-translate-y-0.5 hover:bg-white/10",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}

function Pill({ children, dark = false }) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${
        dark
          ? "border border-white/10 bg-white/10 text-slate-200"
          : "border border-slate-200 bg-slate-50 text-slate-700"
      }`}
    >
      {children}
    </span>
  );
}

function SectionTitle({ eyebrow, title, subtitle, align = "center" }) {
  const alignment = align === "left" ? "text-left" : "mx-auto text-center";

  return (
    <div className={`mb-10 max-w-3xl ${alignment}`}>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-sky-500">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-7 text-slate-600">{subtitle}</p> : null}
    </div>
  );
}

function IconBase({ children, className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

function GithubIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3" />
      <path d="M15 22v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.5s-1.1-.3-3.7 1.4a12.7 12.7 0 0 0-6.2 0C6.3 1.4 5.2 1.7 5.2 1.7a4.8 4.8 0 0 0-.1 3.5A5.2 5.2 0 0 0 3.7 8.8c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V22" />
    </IconBase>
  );
}

function LinkedinIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </IconBase>
  );
}

function MailIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </IconBase>
  );
}

function MapPinIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 21s-6-5.3-6-11a6 6 0 1 1 12 0c0 5.7-6 11-6 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </IconBase>
  );
}

function ExternalLinkIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M14 3h7v7" />
      <path d="M10 14L21 3" />
      <path d="M21 14v4a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h4" />
    </IconBase>
  );
}

function CheckCircleIcon({ className }) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9 12l2 2 4-4" />
    </IconBase>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </IconBase>
  );
}

function BriefcaseIcon({ className }) {
  return (
    <IconBase className={className}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </IconBase>
  );
}

function GraduationCapIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M2 8l10-5 10 5-10 5-10-5z" />
      <path d="M6 10.5v4.5c0 1.2 2.7 3 6 3s6-1.8 6-3v-4.5" />
    </IconBase>
  );
}

function LayersIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 3l9 5-9 5-9-5 9-5z" />
      <path d="M3 12l9 5 9-5" />
      <path d="M3 16l9 5 9-5" />
    </IconBase>
  );
}

function StarIcon({ className }) {
  return (
    <IconBase className={className}>
      <path d="M12 2l3 6 6.5.9-4.7 4.6 1.1 6.5L12 17l-5.9 3 1.1-6.5-4.7-4.6L9 8l3-6z" />
    </IconBase>
  );
}

function ForkIcon({ className }) {
  return (
    <IconBase className={className}>
      <circle cx="6" cy="4" r="2" />
      <circle cx="18" cy="4" r="2" />
      <circle cx="12" cy="20" r="2" />
      <path d="M6 6v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V6" />
      <path d="M12 12v6" />
    </IconBase>
  );
}

function SkillIcon({ type }) {
  const common = "h-6 w-6";

  if (type === "server") {
    return (
      <IconBase className={common}>
        <rect x="3" y="4" width="18" height="6" rx="1" />
        <rect x="3" y="14" width="18" height="6" rx="1" />
        <path d="M7 7h.01" />
        <path d="M7 17h.01" />
      </IconBase>
    );
  }

  if (type === "cloud") {
    return (
      <IconBase className={common}>
        <path d="M20 16.5A4.5 4.5 0 0 0 18 8a6 6 0 0 0-11.5 2A4 4 0 0 0 7 18h11a4 4 0 0 0 2-1.5z" />
      </IconBase>
    );
  }

  if (type === "code") {
    return (
      <IconBase className={common}>
        <path d="M8 16L4 12l4-4" />
        <path d="M16 8l4 4-4 4" />
        <path d="M14 4l-4 16" />
      </IconBase>
    );
  }

  return (
    <IconBase className={common}>
      <path d="M12 3a3 3 0 0 1 3 3c0 1.7-1.2 2.8-2.2 3.6-.8.7-1.3 1.1-1.3 1.9" />
      <path d="M12 21h.01" />
      <path d="M8.5 8.5C7.6 7.8 7 6.9 7 6a3 3 0 0 1 5-2.2A3 3 0 0 1 17 6c0 .9-.6 1.8-1.5 2.5" />
      <path d="M9 14a3 3 0 1 0 6 0c0-1.4-1-2.3-2-3" />
    </IconBase>
  );
}

function LanguageDot() {
  return <span className="inline-block h-2.5 w-2.5 rounded-full bg-sky-500" aria-hidden="true" />;
}

function ProfileLink({ href, icon, children }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700"
      {...getExternalLinkProps(href)}
    >
      <span className="text-sky-500">{icon}</span>
      <span className="min-w-0 flex-1 truncate">{children}</span>
      {href?.startsWith("http") ? <ExternalLinkIcon className="h-4 w-4 opacity-50 transition group-hover:opacity-100" /> : null}
    </a>
  );
}

function RepoCard({ repo }) {
  return (
    <a
      href={repo.html_url}
      {...getExternalLinkProps(repo.html_url)}
      className="group block h-full rounded-[1.75rem] focus:outline-none focus:ring-4 focus:ring-sky-100"
    >
      <Card className="h-full transition group-hover:-translate-y-1 group-hover:border-sky-200 group-hover:shadow-xl group-hover:shadow-sky-100">
        <div className="flex h-full flex-col p-6">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div className="rounded-2xl bg-slate-950 p-3 text-white transition group-hover:bg-sky-600">
              <LayersIcon className="h-5 w-5" />
            </div>
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-bold text-sky-700">Repository</span>
          </div>

          <h3 className="break-words text-xl font-black tracking-tight text-slate-950 group-hover:text-sky-700">{repo.name}</h3>
          <p className="mt-3 flex-1 leading-7 text-slate-600">
            {repo.description || "Public GitHub repository from Bimal Tamang's portfolio."}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-500">
            {repo.language ? (
              <span className="inline-flex items-center gap-2">
                <LanguageDot />
                {repo.language}
              </span>
            ) : null}
            <span className="inline-flex items-center gap-1">
              <StarIcon className="h-4 w-4" />
              {repo.stargazers_count}
            </span>
            <span className="inline-flex items-center gap-1">
              <ForkIcon className="h-4 w-4" />
              {repo.forks_count}
            </span>
            <span>Updated {formatDate(repo.updated_at)}</span>
          </div>

          {repo.topics && repo.topics.length > 0 ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {repo.topics.slice(0, 4).map((topic) => (
                <Pill key={topic}>{topic}</Pill>
              ))}
            </div>
          ) : null}

          <span className="mt-6 inline-flex items-center font-bold text-sky-600">
            View repository
            <ExternalLinkIcon className="ml-2 h-4 w-4" />
          </span>
        </div>
      </Card>
    </a>
  );
}

function validatePortfolioData() {
  const errors = [];

  if (!profile.name) errors.push("Profile name is required.");
  if (!profile.email.includes("@")) errors.push("A valid profile email is required.");
  if (!profile.github.startsWith("https://github.com/")) errors.push("GitHub URL must be valid.");
  if (!profile.linkedin.startsWith("https://www.linkedin.com/")) errors.push("LinkedIn URL must be valid.");
  if (!GITHUB_USERNAME.trim()) errors.push("GitHub username is required.");
  if (!Array.isArray(fallbackRepos) || fallbackRepos.length < 3) errors.push("At least three fallback repositories are required.");
  if (fallbackRepos.some((repo) => !repo.name || !repo.html_url.startsWith(profile.github))) {
    errors.push("Every fallback repository must have a name and must belong to the configured GitHub profile.");
  }
  if (fallbackRepos.some((repo) => !Array.isArray(repo.topics))) errors.push("Every fallback repository must have a topics array.");
  if (!Array.isArray(skillGroups) || skillGroups.length < 4) errors.push("At least four skill groups are required.");
  if (skillGroups.some((group) => !group.title || !Array.isArray(group.skills) || group.skills.length === 0)) {
    errors.push("Every skill group must have a title and at least one skill.");
  }

  return { passed: errors.length === 0, errors };
}

const sanityCheck = validatePortfolioData();

export default function PortfolioPage() {
  const [githubProfile, setGithubProfile] = useState(fallbackProfile);
  const [repos, setRepos] = useState(fallbackRepos);
  const [githubStatus, setGithubStatus] = useState("Loading GitHub data...");
  const { t, locale, setLocale } = useTranslation();

  useEffect(() => {
    let isMounted = true;

    async function loadGitHubData() {
      try {
        const [profileResponse, reposResponse] = await Promise.all([
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
            headers: { Accept: "application/vnd.github+json" },
          }),
          fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`, {
            headers: { Accept: "application/vnd.github+json" },
          }),
        ]);

        if (!isMounted) return;

        if (profileResponse.ok) {
          const githubProfileData = await profileResponse.json();
          setGithubProfile({ ...fallbackProfile, ...githubProfileData });
        }

        if (reposResponse.ok) {
          const githubReposData = await reposResponse.json();
          setRepos(normalizeRepos(githubReposData));
        }

        setGithubStatus("Live GitHub data loaded successfully.");
      } catch (error) {
        if (!isMounted) return;
        setGithubProfile(fallbackProfile);
        setRepos(fallbackRepos);
        setGithubStatus("Using fallback GitHub data because live fetch is unavailable in this environment.");
      }
    }

    loadGitHubData();

    return () => {
      isMounted = false;
    };
  }, []);

  const profileStats = useMemo(
    () => [
      { label: "Years Exp.", value: "10+" },
      { label: "GitHub Repos", value: githubProfile.public_repos || fallbackProfile.public_repos },
      { label: "Followers", value: githubProfile.followers || 0 },
    ],
    [githubProfile]
  );

  const avatarUrl = githubProfile.avatar_url || fallbackProfile.avatar_url;
  const githubBio = githubProfile.bio;
  const githubLocation = githubProfile.location || profile.location;

  return (
    <main className="min-h-screen scroll-smooth bg-[radial-gradient(circle_at_top_left,#dbeafe,transparent_32%),radial-gradient(circle_at_top_right,#e0f2fe,transparent_28%),linear-gradient(180deg,#f8fafc_0%,#ffffff_42%,#f8fafc_100%)] text-slate-900">
      <nav className="sticky top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <a href="#home" className="text-lg font-black tracking-tight text-slate-950" aria-label="Go to home section">
            Bimal<span className="text-sky-500">.</span>
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 md:flex">
            <a href="#about" className="transition hover:text-sky-600">{t('nav.about')}</a>
            <a href="#skills" className="transition hover:text-sky-600">{t('nav.skills')}</a>
            <a href="#projects" className="transition hover:text-sky-600">{t('nav.projects')}</a>
            <a href="#experience" className="transition hover:text-sky-600">{t('nav.experience')}</a>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              {...getExternalLinkProps(profile.github)}
              className="hidden rounded-full border border-slate-200 p-3 text-slate-700 transition hover:border-sky-200 hover:bg-sky-50 hover:text-sky-700 sm:inline-flex"
              aria-label="Open GitHub profile"
            >
              <GithubIcon className="h-4 w-4" />
            </a>
            <Button href={`mailto:${profile.email}`} variant="accent" className="px-4 sm:px-5">{t('nav.contact')}</Button>
            <select
              id="language-select"
              name="language"
              value={locale}
              onChange={(e) => setLocale(e.target.value)}
              aria-label={t('nav.language')}
              className="ml-2 rounded-md border border-slate-200 px-2 py-1 text-sm"
            >
              <option value="en">EN</option>
              <option value="ne">NE</option>
            </select>
          </div>
        </div>
      </nav>

      <section id="home" className="scroll-mt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-sm font-bold text-sky-700 shadow-sm shadow-sky-100">
              <BriefcaseIcon className="h-4 w-4" />
              Solution Architect · Cloud · Data · AI
            </div>

            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
              Building scalable enterprise systems with clean architecture and modern data platforms.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I’m {profile.name}, a {profile.title} based in {profile.location}. I work across backend engineering, cloud architecture, data engineering, and AI-enabled enterprise solutions.
            </p>


            <div className="mt-6 flex flex-wrap gap-2">
              {["Java", "AWS", "Snowflake", "Airflow", "GenAI", "Architecture"].map((item) => (
                <Pill key={item}>{item}</Pill>
              ))}
            </div>

            <div className="mt-6 inline-flex max-w-full rounded-full bg-slate-950/5 px-4 py-2 text-sm text-slate-600">
              {githubStatus}
            </div>

            {!sanityCheck.passed ? (
              <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                Portfolio data warning: {sanityCheck.errors.join(" ")}
              </div>
            ) : null}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href="#projects" variant="accent">
                {t('hero.viewProjects')} <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
              <Button href={profile.github} {...getExternalLinkProps(profile.github)} variant="outline">
                <GithubIcon className="mr-2 h-4 w-4" /> GitHub
              </Button>
              <Button href={profile.linkedin} {...getExternalLinkProps(profile.linkedin)} variant="outline">
                <LinkedinIcon className="mr-2 h-4 w-4" /> LinkedIn
              </Button>
              <Button href={cvHref} download variant="accent" className="sm:ml-2">
                {t('hero.downloadCV')}
              </Button>
            </div>
          </div>

          <Card className="overflow-hidden border-white bg-white/90 shadow-2xl shadow-sky-100">
            <div className="bg-slate-950 p-5 text-white">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-sky-200">Profile</p>
                
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                {avatarUrl ? (
                  <img
                    src={avatarUrl}
                    alt={`${profile.name} GitHub profile photo`}
                    width={112}
                    height={112}
                    className="h-28 w-28 rounded-[1.75rem] border border-slate-100 object-cover shadow-lg shadow-slate-200"
                  />
                ) : (
                  <div className="flex h-28 w-28 items-center justify-center rounded-[1.75rem] bg-slate-950 text-3xl font-black text-white">BT</div>
                )}
                <div className="min-w-0">
                  <h3 className="text-2xl font-black tracking-tight text-slate-950">{githubProfile.name || profile.name}</h3>
                  <p className="mt-1 text-slate-600">{profile.title}</p>
                  <p className="mt-2 text-sm text-slate-500">{profile.company}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-3">
                <ProfileLink href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(githubLocation)}`} icon={<MapPinIcon className="h-4 w-4" />}>
                  {githubLocation}
                </ProfileLink>
                <ProfileLink href={profile.github} icon={<GithubIcon className="h-4 w-4" />}>
                  github.com/lamabimal
                </ProfileLink>
                <ProfileLink href={profile.linkedin} icon={<LinkedinIcon className="h-4 w-4" />}>
                  linkedin.com/in/bimaltamang
                </ProfileLink>
                <ProfileLink href={`mailto:${profile.email}`} icon={<MailIcon className="h-4 w-4" />}>
                  {profile.email}
                </ProfileLink>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                {profileStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                    <div className="text-2xl font-black text-slate-950">{stat.value}</div>
                    <div className="mt-1 text-xs font-medium text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionTitle
              align="left"
              eyebrow={t('sections.about.eyebrow')}
              title={t('sections.about.title')}
              subtitle={t('sections.about.subtitle')}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <Card key={item} className="transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100">
                  <div className="flex gap-4 p-6">
                    <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-sky-500" />
                    <p className="leading-7 text-slate-700">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="scroll-mt-24 bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionTitle
            eyebrow={t('sections.skills.eyebrow')}
            title={t('sections.skills.title')}
            subtitle={t('sections.skills.subtitle')}
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map(({ title, icon, skills }) => (
              <Card key={title} className="h-full transition hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-100">
                <div className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                    <SkillIcon type={icon} />
                  </div>
                  <h3 className="text-lg font-black text-slate-950">{title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skills.map((skill) => <Pill key={skill}>{skill}</Pill>)}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="scroll-mt-24 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <SectionTitle
              align="left"
              eyebrow={t('sections.projects.eyebrow')}
              title={t('sections.projects.title')}
              subtitle={t('sections.projects.subtitle')}
            />
            <Button href={profile.github} {...getExternalLinkProps(profile.github)} variant="outline" className="w-fit">
              View all repositories <ExternalLinkIcon className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {repos.map((repo) => <RepoCard key={repo.id || repo.name} repo={repo} />)}
          </div>
        </div>
      </section>

      <section id="experience" className="scroll-mt-24 bg-slate-950 py-20 text-white">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-sky-300">Experience</p>
            <h2 className="text-3xl font-black tracking-tight md:text-4xl">Architecture, leadership, and engineering delivery</h2>
            <p className="mt-4 text-base leading-7 text-slate-300">A portfolio section designed to communicate both hands-on ability and senior-level ownership.</p>
          </div>

          <div className="relative mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {experience.map((item, idx) => {
              const years = formatYearRange(item);
              return (
                <Card key={`${item.role}-${item.company}-${idx}`} className="border-white/10 bg-white/5 text-white shadow-none backdrop-blur">
                  <div className="p-7">
                    <div className="flex items-baseline justify-between">
                      <p className="text-sm font-bold text-sky-300">{years || item.period}</p>
                    </div>
                    <h3 className="mt-2 text-2xl font-black">{item.role} {years ? <span className="ml-3 text-sm font-medium text-slate-300">· {years}</span> : null}</h3>
                    <p className="mt-1 text-slate-300">{item.company}</p>

                    <ul className="mt-6 space-y-3">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3 text-slate-200">
                          <CheckCircleIcon className="mt-1 h-4 w-4 flex-none text-sky-300" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[0.8fr_1.2fr]">
          <Card>
            <div className="p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
                <GraduationCapIcon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-black text-slate-950">Education</h2>
              <div className="mt-5 space-y-4">
                {education.map((item) => <p key={item} className="leading-7 text-slate-700">{item}</p>)}
              </div>
            </div>
          </Card>

          <Card>
            <div className="p-7">
              <h2 className="text-2xl font-black text-slate-950">Current focus</h2>
              <p className="mt-4 leading-8 text-slate-600">
                I am strengthening my portfolio around production-ready data engineering, Snowflake, AI-powered enterprise applications, agentic workflows, cloud architecture, and clean microservice design.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Snowflake Cortex", "Data Engineering", "AWS", "Airflow", "LangGraph", "Enterprise GenAI", "Microservices"].map((item) => <Pill key={item}>{item}</Pill>)}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="certifications" className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-5">
          <h2 className="text-2xl font-black text-slate-950">Certifications</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((c) => (
              <Card key={c.url} className="p-4">
                <div>
                  <p className="font-semibold text-slate-900">{c.title}</p>
                  <p className="text-sm text-slate-600">{c.issuer}</p>
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sky-600 hover:underline">View certificate</a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 pb-24">
        <Card className="overflow-hidden border-slate-900 bg-slate-950 text-white shadow-2xl shadow-slate-300">
          <div className="bg-[radial-gradient(circle_at_top,#0ea5e9,transparent_35%)] p-8 text-center md:p-12">
            <h2 className="text-3xl font-black md:text-4xl">Let’s build scalable, data-driven systems.</h2>
            <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-300">
              Open to architecture discussions, data engineering projects, AI integration ideas, and international remote opportunities.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href={`mailto:${profile.email}`} variant="accent">
                <MailIcon className="mr-2 h-4 w-4" />
                {t('hero.emailMe')}
              </Button>
              <Button href={profile.linkedin} {...getExternalLinkProps(profile.linkedin)} variant="darkOutline">
                <LinkedinIcon className="mr-2 h-4 w-4" />
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </Card>
      </section>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-500 md:flex-row">
          <p>© 2026 {profile.name}</p>
          <div className="flex gap-4">
            <a href={profile.github} {...getExternalLinkProps(profile.github)} className="hover:text-sky-600">{t('footer.github')}</a>
            <a href={profile.linkedin} {...getExternalLinkProps(profile.linkedin)} className="hover:text-sky-600">{t('footer.linkedin')}</a>
            <a href={`mailto:${profile.email}`} className="hover:text-sky-600">{t('footer.email')}</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
