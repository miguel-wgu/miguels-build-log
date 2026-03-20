import Link from "next/link";

export default function HomePage() {
    return (
        <section className="space-y-16">

            {/* ── Hero ─────────────────────────────────────────────────────────── */}
            <div className="space-y-6">
                {/* Label badge */}
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    v1.0 — now building
                </span>

                {/* Main headline with gradient accent */}
                <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-[1.05]">
                    <span className="bg-linear-to-br from-emerald-300 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
                        Miguel&apos;s
                    </span>{" "}
                    Build Log
                </h1>

                <p className="max-w-xl text-base text-zinc-400 leading-relaxed">
                    A growing collection of embedded systems projects, build notes, and
                    step-by-step tutorials. Each project documents the full journey from
                    first breadboard to final photos.
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                    {["Arduino", "C++", "3D Printing", "Electronics"].map((tag) => (
                        <span
                            key={tag}
                            className="rounded-md border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs text-zinc-400 font-mono"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* ── Featured project card ─────────────────────────────────────────── */}
            <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500 mb-4">
                    Featured Project
                </p>

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden hover:border-zinc-700 transition-colors">
                    {/* Top accent bar */}
                    <div className="h-px bg-linear-to-r from-emerald-500 via-teal-400 to-transparent" />

                    <div className="p-7 flex flex-col sm:flex-row items-start gap-6">
                        {/* Left: text content */}
                        <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4 flex-wrap">
                                <div className="space-y-1">
                                    <span className="text-xs font-mono text-emerald-400">Project 01</span>
                                    <h2 className="text-xl font-semibold text-zinc-100">
                                        LED Traffic Light System
                                    </h2>
                                </div>
                                <div className="flex items-center gap-2 flex-wrap">
                                    <span className="rounded-full border border-zinc-700 bg-zinc-800 px-2.5 py-1 text-xs text-zinc-400">
                                        Arduino
                                    </span>
                                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-400">
                                        Complete
                                    </span>
                                </div>
                            </div>

                            <p className="mt-4 text-sm text-zinc-200 leading-relaxed">
                                An Arduino-based traffic light with a 3D printed housing. The
                                tutorial covers hardware wiring, code walkthroughs, and lessons
                                learned along the way.
                            </p>

                            <div className="mt-6">
                                <Link
                                    href="/projects/led-traffic-light"
                                    className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 text-sm font-medium text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-colors"
                                >
                                    View project tutorial
                                    <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Right: GIF — full width on mobile, fixed width beside text on sm+ */}
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="https://raw.githubusercontent.com/miguel-wgu/LED_Traffic_Light/main/docs/LED%20Cycle.gif"
                            alt="LED traffic light cycling through green, yellow, and red"
                            className="w-full sm:w-28 rounded-lg shrink-0 sm:mt-1"
                        />
                    </div>
                </div>
            </div>

            {/* ── All projects link ─────────────────────────────────────────────── */}
            <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                    All Projects
                </h3>
                <Link
                    href="/projects"
                    className="inline-flex items-center gap-1.5 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                    Browse all
                    <span aria-hidden="true">→</span>
                </Link>
            </div>

        </section>
    );
}
