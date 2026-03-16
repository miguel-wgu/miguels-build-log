import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "About — Miguel's Build Log",
    description: "BS in Computer Science. Building embedded systems and 3D printing projects for fun.",
};

export default function AboutPage() {
    return (
        <article className="space-y-14 max-w-3xl">

            {/* ── Page header ──────────────────────────────────────────────────── */}
            <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    About
                </span>

                <h1 className="text-4xl font-bold tracking-tight text-zinc-100">
                    Hey, I&apos;m Miguel
                </h1>

                {/* TODO: swap in a personal one-liner if you want something more specific */}
                <p className="text-base text-zinc-300 leading-relaxed">
                    I have a BS in Computer Science and build embedded systems and 3D printing
                    projects for fun because I genuinely love it.
                </p>
            </div>

            {/* ── Background ───────────────────────────────────────────────────── */}
            <section>
                <h2 className="text-lg font-semibold text-zinc-100 border-b border-zinc-700 pb-2 mb-4">
                    Background
                </h2>
                {/* TODO: expand with your story — how long you've been building, what got you into hardware, etc. */}
                <div className="space-y-3 text-zinc-300 leading-relaxed">
                    <p>
                        I got my CS degree and kept going. Hardware pulled me in because there&apos;s
                        something satisfying about writing code that controls something physical: LEDs,
                        motors, sensors. Seeing it work in the real world hits differently than a
                        program running on a screen.
                    </p>
                    <p>
                        The LED Traffic Light project was my first step into that world. I built it to
                        get comfortable with the full embedded workflow: setting up a proper toolchain,
                        wiring real components, and writing C++ for a microcontroller.
                    </p>
                    <p>
                        3D printing came along naturally as a way to give projects a proper housing
                        instead of leaving them on a breadboard forever.
                    </p>
                </div>
            </section>

            {/* ── Why this site ────────────────────────────────────────────────── */}
            <section>
                <h2 className="text-lg font-semibold text-zinc-100 border-b border-zinc-700 pb-2 mb-4">
                    Why this site
                </h2>
                <div className="space-y-3 text-zinc-300 leading-relaxed">
                    <p>
                        I learn best by documenting. Writing up a project forces me to understand it
                        well enough to explain it, and it leaves a record I can come back to later.
                    </p>
                    <p>
                        Miguel&apos;s Build Log is that record. Every project gets a full write-up: the
                        hardware, the code, what went wrong, what I&apos;d do differently. If it also
                        helps someone else getting started, even better.
                    </p>
                </div>
            </section>

            {/* ── Tools & interests ────────────────────────────────────────────── */}
            <section>
                <h2 className="text-lg font-semibold text-zinc-100 border-b border-zinc-700 pb-2 mb-4">
                    Tools &amp; interests
                </h2>
                <div className="overflow-x-auto rounded-lg border border-zinc-700">
                    <table className="w-full text-sm">
                        <thead className="bg-zinc-900 text-zinc-300 text-xs uppercase tracking-wider">
                        <tr>
                            <th className="px-4 py-3 text-left font-medium">Area</th>
                            <th className="px-4 py-3 text-left font-medium">Tools</th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800/60">
                        {[
                            ["Microcontrollers", "Arduino (Elegoo Mega R3), PlatformIO"],
                            ["Languages", "C++, TypeScript"],
                            ["Circuit planning", "Tinkercad"],
                            ["3D printing", "Bambu Lab P1S, P2s, and A1 Mini "],  // TODO: add your slicer and printer here
                            ["IDEs", "CLion (embedded), WebStorm (web)"],
                            ["This site", "Next.js, Tailwind CSS, Vercel"],
                        ].map(([area, tools]) => (
                            <tr key={area} className="bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors">
                                <td className="px-4 py-3 text-zinc-300 font-medium">{area}</td>
                                <td className="px-4 py-3 text-zinc-300">{tools}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>

            {/* ── What's next ──────────────────────────────────────────────────── */}
            <section>
                <h2 className="text-lg font-semibold text-zinc-100 border-b border-zinc-700 pb-2 mb-4">
                    What&apos;s next
                </h2>
                {/* TODO: update this list as your goals and upcoming projects evolve */}
                <ul className="space-y-2">
                    {[
                        "Continuing to build out more Arduino projects",
                        "Learning to incorporate sensors: temperature, distance, motion",
                        "Exploring more complex C++ patterns for embedded code",
                        "Eventually moving beyond breadboards to custom PCBs",
                    ].map((item, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-zinc-300">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                            {item}
                        </li>
                    ))}
                </ul>
            </section>

            {/* ── Get in touch ─────────────────────────────────────────────────── */}
            <section>
                <h2 className="text-lg font-semibold text-zinc-100 border-b border-zinc-700 pb-2 mb-4">
                    Get in touch
                </h2>
                {/* TODO: add LinkedIn, email, or other links as needed */}
                <div className="flex flex-col gap-3">
                    <a
                        href="https://github.com/miguel-wgu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors w-fit"
                    >
                        <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        github.com/miguel-wgu
                    </a>
                </div>
            </section>

            {/* ── Projects CTA ─────────────────────────────────────────────────── */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden">
                <div className="h-px bg-gradient-to-r from-emerald-500 via-teal-400 to-transparent" />
                <div className="p-7 flex items-center justify-between gap-4 flex-wrap">
                    <div>
                        <p className="text-sm font-medium text-zinc-100">See the work</p>
                        <p className="text-sm text-zinc-400 mt-0.5">Browse the full project list with build notes and tutorials.</p>
                    </div>
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 text-sm font-medium text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-colors shrink-0"
                    >
                        View projects
                        <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>

        </article>
    );
}
