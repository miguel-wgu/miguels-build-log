// Next.js reads this `metadata` export and injects <title> and <meta description>
// into the page's <head> automatically — no need to write HTML head tags yourself.
// This overrides the site-wide defaults set in layout.tsx for just this page.
import type { Metadata } from "next";
import ClickableImage from "./ClickableImage";

export const metadata: Metadata = {
    title: "LED Traffic Light System — Miguel's Build Log",
    description:
        "An Arduino project that cycles through green, yellow, and red LEDs to simulate a traffic light sequence.",
};

// Each section of the tutorial is its own small component.
// Breaking the page into pieces keeps each chunk easy to read and edit.
// None of these are exported — they're only used inside this file.

function SectionHeading({ children }: { children: React.ReactNode }) {
    return (
        // border-zinc-700 (was zinc-800) — one step lighter so the divider is actually visible
        <h2 className="text-lg font-semibold text-zinc-100 border-b border-zinc-700 pb-2 mb-4">
            {children}
        </h2>
    );
}

// A reusable component for the hardware and software tables.
// `headers` is the list of column labels; `rows` is the data.
// This is just a typed array of strings — TypeScript ensures you can't
// accidentally pass a number or object where a string is expected.
function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
    return (
        <div className="overflow-x-auto rounded-lg border border-zinc-700">
            <table className="w-full text-sm">
                {/* text-zinc-300 (was zinc-400) — column labels need to be readable */}
                <thead className="bg-zinc-900 text-zinc-300 text-xs uppercase tracking-wider">
                <tr>
                    {headers.map((h) => (
                        <th key={h} className="px-4 py-3 text-left font-medium">
                            {h}
                        </th>
                    ))}
                </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800/60">
                {rows.map((row, i) => (
                    // `i` (the row index) is used as the key here because these rows
                    // are static data that never reorder — safe to use index as key.
                    <tr key={i} className="bg-zinc-900/30 hover:bg-zinc-900/60 transition-colors">
                        {row.map((cell, j) => (
                            <td key={j} className="px-4 py-3 text-zinc-300 align-top">
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

// This is the main page component. Next.js renders this when someone visits
// /projects/led-traffic-light — the folder name is the URL, automatically.
export default function LEDTrafficLightPage() {
    return (
        <article className="space-y-14 max-w-3xl">

            {/* ── Page header ──────────────────────────────────────────────────── */}
            <div className="space-y-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Project 01 — Arduino
                </span>

                <h1 className="text-4xl font-bold tracking-tight text-zinc-100">
                    LED Traffic Light System
                </h1>

                {/* text-zinc-300 (was zinc-400) — this is the primary page description, needs to be readable */}
                <p className="text-base text-zinc-300 leading-relaxed">
                    An Arduino project that cycles through green, yellow, and red LEDs
                    to simulate a real traffic light sequence.
                </p>

                {/*
                  External links use a plain <a> tag, not Next.js <Link>.
                  <Link> is for navigating between pages inside your own app.
                  For external URLs (like GitHub), use <a> with:
                    target="_blank"  → opens in a new tab
                    rel="noopener noreferrer"  → security best practice when opening
                                                 new tabs; prevents the new page from
                                                 accessing your page via window.opener
                */}
                <a
                    href="https://github.com/miguel-wgu/LED_Traffic_Light"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                    {/* aria-hidden hides the icon from screen readers — it's decorative */}
                    <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    miguel-wgu/LED_Traffic_Light
                </a>
            </div>

            {/* ── Demo GIF ─────────────────────────────────────────────────────── */}
            <div id="demo-gif" className="rounded-xl overflow-hidden border border-zinc-700 w-1/2 mx-auto">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                    src="https://raw.githubusercontent.com/miguel-wgu/LED_Traffic_Light/main/docs/LED%20Cycle.gif"
                    alt="LED traffic light cycling through green, yellow, and red"
                    className="w-full"
                />
            </div>

            {/* ── Overview ─────────────────────────────────────────────────────── */}
            <section>
                <SectionHeading>Overview</SectionHeading>
                {/* text-zinc-300 (was zinc-400) — body text throughout */}
                <p className="text-zinc-300 leading-relaxed">
                    This was my first embedded systems project after getting back into programming.
                    The goal was simple: wire up three LEDs to an Arduino and write code to cycle
                    through them like a traffic light — green for 3 seconds, yellow for 1.5, red
                    for 3, then repeat.
                </p>
                <p className="text-zinc-300 leading-relaxed mt-3">
                    Simple on paper, but it introduced me to the full workflow: setting up a proper
                    development environment, writing C++ for a microcontroller, wiring physical
                    components, and understanding why each piece matters.
                </p>
            </section>

            {/* ── Hardware ─────────────────────────────────────────────────────── */}
            <section>
                <SectionHeading>Hardware</SectionHeading>
                <DataTable
                    headers={["Component", "Qty", "Notes"]}
                    rows={[
                        ["Elegoo Mega R3 (Arduino Mega 2560)", "1", "The brains — runs the code and drives the pins"],
                        ["LED — Green", "1", 'Indicates "go"'],
                        ["LED — Yellow", "1", 'Indicates "slow down"'],
                        ["LED — Red", "1", 'Indicates "stop"'],
                        ["220 ohm resistor", "3", "One per LED — limits current to protect the LEDs and the board"],
                        ["Jumper wires", "6+", "Connect components on the breadboard"],
                        ["Breadboard", "1", "No soldering needed — components plug in"],
                    ]}
                />
            </section>

            {/* ── Software & Tools ─────────────────────────────────────────────── */}
            <section>
                <SectionHeading>Software & Tools</SectionHeading>
                <DataTable
                    headers={["Tool", "Purpose"]}
                    rows={[
                        ["CLion", "IDE — JetBrains editor for C/C++"],
                        ["PlatformIO", "Build system and package manager for embedded projects"],
                        ["Tinkercad", "Browser-based circuit simulator for planning the wiring"],
                    ]}
                />
            </section>

            {/* ── Setup & Environment ──────────────────────────────────────────── */}
            <section>
                <SectionHeading>Setup & Environment</SectionHeading>
                <p className="text-zinc-300 leading-relaxed mb-4">
                    Getting the environment running was the first real challenge of this project.
                </p>
                <ol className="space-y-4 text-zinc-300 leading-relaxed list-none">
                    {[
                        {
                            step: "Install CLion",
                            detail: "JetBrains IDE with good C++ support.",
                        },
                        {
                            step: "Install PlatformIO as a CLion plugin",
                            detail:
                                "PlatformIO handles downloading the right compiler toolchain, board definitions, and libraries for your target board automatically.",
                        },
                    ].map(({ step, detail }, i) => (
                        <li key={i} className="flex gap-3">
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-400">
                                {i + 1}
                            </span>
                            <span>
                                <strong className="text-zinc-100">{step}</strong> — {detail}
                            </span>
                        </li>
                    ))}
                </ol>

                {/* Numbered steps 3 and 4 have code blocks, so they're written out manually */}
                <div className="mt-4 flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-400">
                        3
                    </span>
                    <div className="space-y-2">
                        <p className="text-zinc-300">
                            <strong className="text-zinc-100">Install dependencies with curl</strong> —
                            PlatformIO&apos;s installer is a Python script fetched via{" "}
                            <code className="rounded bg-zinc-800 px-1.5 py-0.5 text-xs text-emerald-300">curl</code>:
                        </p>
                        {/* border-zinc-700 (was zinc-800) — makes the code block edge visible */}
                        <pre className="rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-xs text-zinc-300 overflow-x-auto font-mono">
                            <code>{`curl -fsSL https://raw.githubusercontent.com/platformio/platformio-core-installer/master/get-platformio.py -o get-platformio.py\npython3 get-platformio.py`}</code>
                        </pre>
                        {/* text-zinc-400 (was zinc-500) — zinc-500 fails WCAG AA contrast on this background */}
                        <p className="text-zinc-400 text-sm">
                            <code className="text-zinc-300">curl</code> downloads a file from a URL.
                            The flags <code className="text-zinc-300">-fsSL</code> mean: fail silently on errors,
                            suppress progress output, show errors if they happen, and follow redirects.
                        </p>
                    </div>
                </div>

                <div className="mt-4 flex gap-3">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-400">
                        4
                    </span>
                    <div className="space-y-2">
                        <p className="text-zinc-300">
                            <strong className="text-zinc-100">Configure platformio.ini</strong> — this file
                            tells PlatformIO which board you&apos;re targeting:
                        </p>
                        <pre className="rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-3 text-xs text-zinc-300 overflow-x-auto font-mono">
                            <code>{`[env:megaatmega2560]\nplatform = atmelavr\nboard = megaatmega2560\nframework = arduino`}</code>
                        </pre>
                        <p className="text-zinc-400 text-sm">
                            <code className="text-zinc-300">atmelavr</code> is the chip family the Mega 2560 uses.
                            PlatformIO reads this and downloads exactly what it needs to compile for that board.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Wiring ───────────────────────────────────────────────────────── */}
            <section>
                <SectionHeading>Wiring</SectionHeading>
                <p className="text-zinc-300 leading-relaxed mb-4">
                    See the{" "}
                    <a
                        href="https://www.tinkercad.com/things/kvZEJ7QVY8S-led-traffic-lights"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                        Tinkercad diagram
                    </a>{" "}
                    for an interactive visual.
                </p>

                {/* text-zinc-200 (was zinc-400) — sub-headings must stand above body text */}
                <h3 className="text-sm font-medium text-zinc-200 uppercase tracking-wider mb-3">Pin Mapping</h3>
                <DataTable
                    headers={["Arduino Pin", "LED Color"]}
                    rows={[
                        ["13", "Green"],
                        ["12", "Yellow"],
                        ["11", "Red"],
                        ["GND", "Common ground (all three LEDs share one ground rail)"],
                    ]}
                />

                <h3 className="text-sm font-medium text-zinc-200 uppercase tracking-wider mt-6 mb-3">
                    Steps (repeat for each LED)
                </h3>
                <ol className="space-y-6 text-zinc-300 leading-relaxed list-none">
                    {[
                        {
                            text: "Place the LED on the breadboard. LEDs are polarized — the longer leg (anode, +) connects toward the Arduino; the shorter leg (cathode, −) connects to ground.",
                            image: null,
                        },
                        {
                            text: "Place a 220 ohm resistor on the breadboard for each LED, connecting one leg to the LED's anode. Run a single jumper wire from the Arduino's GND pin to the breadboard's ground rail. The resistor limits current to ~14mA, within the 40mA per-pin limit of the Mega 2560. Without it, the LED can burn out or damage the pin.",
                            image: {
                                src: "https://raw.githubusercontent.com/miguel-wgu/LED_Traffic_Light/main/docs/LED_Traffic_Light-1.jpg",
                                alt: "Arduino ground connected to breadboard ground rail, with 3 resistors and 3 LEDs wired in place",
                            },
                        },
                        {
                            text: "Run a jumper wire from the resistor's free end to the Arduino digital pin (11, 12, or 13).",
                            image: {
                                src: "https://raw.githubusercontent.com/miguel-wgu/LED_Traffic_Light/main/docs/LED_Traffic_Light-2.jpg",
                                alt: "Jumper wires added from the resistors to Arduino pins 13, 12, and 11",
                            },
                        },
                        {
                            text: "Run a jumper wire from each LED's cathode to a slot in the breadboard's ground rail.",
                            image: {
                                src: "https://raw.githubusercontent.com/miguel-wgu/LED_Traffic_Light/main/docs/LED_Traffic_Light-3.jpg",
                                alt: "Ground wires added from each LED cathode to the breadboard ground rail, completing the circuit",
                            },
                        },
                        {
                            text: (
                                <>
                                    Power the Arduino via USB or battery (if the code is already uploaded) and
                                    watch the LEDs cycle. See the{" "}
                                    <a href="#demo-gif" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                                        demo at the top
                                    </a>{" "}
                                    for what to expect.
                                </>
                            ),
                            image: null,
                        },
                    ].map(({ text, image }, i) => (
                        <li key={i} className="flex gap-3">
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-xs font-mono text-zinc-400">
                                {i + 1}
                            </span>
                            <span className="flex-1">
                                {text}
                                {image && <ClickableImage src={image.src} alt={image.alt} />}
                            </span>
                        </li>
                    ))}
                </ol>

                <p className="mt-4 rounded-lg border border-zinc-700 bg-zinc-900/50 px-4 py-3 text-sm text-zinc-300">
                    <strong className="text-zinc-100">Tip:</strong> If an LED doesn&apos;t light up,
                    check polarity first. Flip it around — it costs nothing and is almost always the issue.
                </p>
            </section>

            {/* ── Build Steps ──────────────────────────────────────────────────── */}
            <section>
                <SectionHeading>Build Steps</SectionHeading>
                <ol className="space-y-3 text-zinc-300 leading-relaxed list-none">
                    {[
                        "Plan the circuit in Tinkercad before touching real hardware.",
                        "Set up CLion and install the PlatformIO plugin.",
                        "Create a new PlatformIO project targeting megaatmega2560.",
                        "Wire the components as covered in the Wiring section above.",
                        "Write setup() to configure the pins as outputs.",
                        "Write loop() with the traffic light timing sequence.",
                        "Build and upload via PlatformIO (Upload button or pio run --target upload), then power on and confirm the LEDs cycle correctly.",
                    ].map((step, i) => (
                        <li key={i} className="flex gap-3">
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-400">
                                {i + 1}
                            </span>
                            <span>{step}</span>
                        </li>
                    ))}
                </ol>
            </section>

            {/* ── Code Walkthrough ─────────────────────────────────────────────── */}
            <section>
                <SectionHeading>Code Walkthrough</SectionHeading>

                <pre className="rounded-lg bg-zinc-900 border border-zinc-700 px-4 py-4 text-xs text-zinc-300 overflow-x-auto font-mono leading-relaxed mb-6">
                    <code>{`#include <Arduino.h>

const int GREEN_LED  = 13;
const int YELLOW_LED = 12;
const int RED_LED    = 11;

void setup() {
    pinMode(GREEN_LED,  OUTPUT);
    pinMode(YELLOW_LED, OUTPUT);
    pinMode(RED_LED,    OUTPUT);
}

void loop() {
    // GREEN — Go (3 seconds)
    digitalWrite(GREEN_LED,  HIGH);
    digitalWrite(YELLOW_LED, LOW);
    digitalWrite(RED_LED,    LOW);
    delay(3000);

    // YELLOW — Slow down (1.5 seconds)
    digitalWrite(GREEN_LED,  LOW);
    digitalWrite(YELLOW_LED, HIGH);
    digitalWrite(RED_LED,    LOW);
    delay(1500);

    // RED — Stop (3 seconds)
    digitalWrite(GREEN_LED,  LOW);
    digitalWrite(YELLOW_LED, LOW);
    digitalWrite(RED_LED,    HIGH);
    delay(3000);
}`}</code>
                </pre>

                <dl className="space-y-4">
                    {[
                        {
                            term: "#include <Arduino.h>",
                            def: "When using PlatformIO (instead of the Arduino IDE), you need to explicitly include this header. It gives you access to all the core Arduino functions like pinMode, digitalWrite, and delay. The Arduino IDE adds this automatically behind the scenes — PlatformIO doesn't.",
                        },
                        {
                            term: "const int GREEN_LED = 13",
                            def: "Naming pin numbers as constants instead of writing 13 everywhere makes the code easier to read and update. If you rewire a pin, you change it in one place.",
                        },
                        {
                            term: "setup()",
                            def: "Runs once when the board powers on. pinMode(pin, OUTPUT) tells the Arduino this pin will be sending voltage out, not reading it in. You have to call this before digitalWrite will work.",
                        },
                        {
                            term: "loop()",
                            def: "Runs on repeat forever. This is the core of most Arduino programs.",
                        },
                        {
                            term: "digitalWrite(pin, HIGH)",
                            def: "Sets the pin to 5V, which drives current through the LED and turns it on. LOW sets it to 0V (off).",
                        },
                        {
                            term: "delay(3000)",
                            def: "Pauses execution for 3000 milliseconds (3 seconds). During this time, nothing else runs — the board just waits. Fine for a simple project like this, but in more complex programs delay() blocks everything, which can cause problems.",
                        },
                    ].map(({ term, def }) => (
                        <div key={term} className="rounded-lg border border-zinc-700 bg-zinc-900/40 px-4 py-3">
                            <dt className="font-mono text-sm text-emerald-300 mb-1">{term}</dt>
                            {/* text-zinc-300 (was zinc-400) — definition text is primary content */}
                            <dd className="text-sm text-zinc-300 leading-relaxed">{def}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            {/* ── Quirks & Fixes ───────────────────────────────────────────────── */}
            <section>
                <SectionHeading>Quirks & Fixes</SectionHeading>
                <ul className="space-y-3">
                    {[
                        {
                            title: "LED not lighting up",
                            detail: "Almost always a polarity issue. LEDs only work in one direction. Flip the LED around on the breadboard.",
                        },
                        {
                            title: "PlatformIO not found after install",
                            detail: "The pio command wasn't on my PATH after install. Had to add ~/.platformio/penv/bin to my shell config manually.",
                        },
                        {
                            title: "#include <Arduino.h> confusion",
                            detail: "The Arduino IDE hides this include, so most beginner tutorials don't mention it. PlatformIO requires it explicitly.",
                        },
                    ].map(({ title, detail }) => (
                        <li key={title} className="flex gap-3 rounded-lg border border-zinc-700 bg-zinc-900/40 px-4 py-3">
                            <span className="mt-0.5 text-yellow-400 shrink-0">⚠</span>
                            <div>
                                <p className="text-sm font-medium text-zinc-100">{title}</p>
                                <p className="text-sm text-zinc-300 mt-0.5">{detail}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ── Decisions Made ───────────────────────────────────────────────── */}
            <section>
                <SectionHeading>Decisions Made</SectionHeading>
                <ul className="space-y-3">
                    {[
                        {
                            title: "PlatformIO over Arduino IDE",
                            detail: "PlatformIO integrates with CLion, handles dependencies like a real package manager, and fits a more professional C++ workflow.",
                        },
                        {
                            title: "220 ohm resistors",
                            detail: "Standard choice for 5V Arduino projects. Limits current to ~14mA — bright enough to see clearly, well within the pin's 40mA limit.",
                        },
                        {
                            title: "Tinkercad for planning",
                            detail: "Simulated the circuit before building it physically. Caught a wiring mistake (wrong leg on the resistor) before it became a real problem.",
                        },
                        {
                            title: "Named constants for pins",
                            detail: "const int GREEN_LED = 13 instead of magic numbers. Makes the code self-documenting.",
                        },
                    ].map(({ title, detail }) => (
                        <li key={title} className="flex gap-3 rounded-lg border border-zinc-700 bg-zinc-900/40 px-4 py-3">
                            <span className="mt-0.5 text-emerald-400 shrink-0">→</span>
                            <div>
                                <p className="text-sm font-medium text-zinc-100">{title}</p>
                                <p className="text-sm text-zinc-300 mt-0.5">{detail}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* ── What I Learned ───────────────────────────────────────────────── */}
            <section>
                <SectionHeading>What I Learned</SectionHeading>
                <ul className="space-y-2">
                    {[
                        "How to set up PlatformIO and curl to install developer tooling from the command line.",
                        "The difference between setup() (runs once) and loop() (runs forever) in Arduino programs.",
                        "Why resistors are required in LED circuits and how to calculate the right value.",
                        "That LEDs are polarized — something I had to learn the hard way by plugging one in backwards.",
                        "How Tinkercad can save time by letting you prototype a circuit virtually before wiring it for real.",
                    ].map((item, i) => (
                        <li key={i} className="flex gap-2.5 text-sm text-zinc-300">
                            <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                            {item}
                        </li>
                    ))}
                </ul>
            </section>

        </article>
    );
}
