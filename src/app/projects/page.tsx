import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Projects — Miguel's Build Log",
    description: "A growing list of embedded systems builds with hardware details, code walkthroughs, and lessons learned.",
};

// One entry per project. Add new projects here as they're completed.
const projects = [
    {
        number: "01",
        slug: "led-traffic-light",
        title: "LED Traffic Light System",
        platform: "Arduino",
        status: "In Progress" as const,
        description:
            "Cycles through green, yellow, and red LEDs to simulate a real traffic light. Covers PlatformIO setup, circuit wiring, and a full C++ code walkthrough.",
        github: "https://github.com/miguel-wgu/LED_Traffic_Light",
        githubLabel: "miguel-wgu/LED_Traffic_Light",
    },
];

// Badge color varies by status so it's immediately scannable.
function StatusBadge({ status }: { status: "Complete" | "In Progress" | "Planned" }) {
    const styles: Record<typeof status, string> = {
        Complete: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
        "In Progress": "border-yellow-500/30 bg-yellow-500/10 text-yellow-400",
        Planned: "border-zinc-700 bg-zinc-800 text-zinc-400",
    };
    return (
        <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}>
            {status}
        </span>
    );
}

export default function ProjectsPage() {
    return (
        <section className="space-y-14 max-w-3xl">

            {/* ── Page header ──────────────────────────────────────────────────── */}
            <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Projects
                </span>

                <h1 className="text-4xl font-bold tracking-tight text-zinc-100">
                    All Projects
                </h1>

                <p className="text-base text-zinc-300 leading-relaxed">
                    Every build gets a full write-up: hardware, code, what went wrong,
                    and what I learned. Starting simple and working up from there.
                </p>
            </div>

            {/* ── Project list ─────────────────────────────────────────────────── */}
            <ul className="space-y-6">
                {projects.map((project) => (
                    <li
                        key={project.slug}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden hover:border-zinc-700 transition-colors"
                    >
                        {/* Top accent bar */}
                        <div className="h-px bg-linear-to-r from-emerald-500 via-teal-400 to-transparent" />

                        <div className="p-7 space-y-4">
                            {/* Title row */}
                            <div className="flex items-start justify-between gap-4 flex-wrap">
                                <div className="space-y-1">
                                    <span className="text-xs font-mono text-emerald-400">
                                        Project {project.number}
                                    </span>
                                    <h2 className="text-xl font-semibold text-zinc-100">
                                        {project.title}
                                    </h2>
                                </div>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-xs text-zinc-400">
                                        {project.platform}
                                    </span>
                                    <StatusBadge status={project.status} />
                                </div>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-zinc-300 leading-relaxed max-w-lg">
                                {project.description}
                            </p>

                            {/* Links */}
                            <div className="flex items-center gap-4 flex-wrap">
                                <Link
                                    href={`/projects/${project.slug}`}
                                    className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 text-sm font-medium text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-colors"
                                >
                                    View build log
                                    <span aria-hidden="true">→</span>
                                </Link>

                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors"
                                >
                                    <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                    </svg>
                                    {project.githubLabel}
                                </a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>

        </section>
    );
}