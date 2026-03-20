"use client";

import { useState } from "react";

interface Props {
    src: string;
    alt: string;
}

export default function ClickableImage({ src, alt }: Props) {
    const [open, setOpen] = useState(false);

    return (
        <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                src={src}
                alt={alt}
                onClick={() => setOpen(true)}
                className="mt-3 w-3/4 rounded-xl border border-zinc-700 cursor-zoom-in"
            />

            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
                    onClick={() => setOpen(false)}
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={src}
                        alt={alt}
                        className="max-h-[90dvh] max-w-full rounded-xl object-contain"
                    />
                    <button
                        aria-label="Close image"
                        className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700 transition-colors"
                        onClick={() => setOpen(false)}
                    >
                        ✕
                    </button>
                </div>
            )}
        </>
    );
}