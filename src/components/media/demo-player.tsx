"use client";

import { Play } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

type DemoPlayerProps = {
  provider: "youtube" | "loom";
  src: string;
  title: string;
  poster: string;
};

export function DemoPlayer({ provider, src, title, poster }: DemoPlayerProps) {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <div className="aspect-video overflow-hidden border border-[var(--line)] bg-black">
        <iframe allow="autoplay; fullscreen; picture-in-picture" allowFullScreen className="h-full w-full" src={src} title={title} />
      </div>
    );
  }

  return (
    <button aria-label={`Play demo: ${title}`} className="group relative block aspect-video w-full overflow-hidden border border-[var(--line)] bg-[var(--surface)] text-left" onClick={() => setPlaying(true)} type="button">
      <Image alt="" className="object-cover opacity-55 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-75" fill sizes="(min-width: 1024px) 52vw, 100vw" src={poster} />
      <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,9,13,.9),rgba(7,9,13,.18))]" />
      <span className="absolute inset-0 flex items-end justify-between p-5 md:p-7">
        <span><span className="eyebrow">{provider} demonstration</span><span className="mt-2 block text-lg font-medium">Watch the workflow</span></span>
        <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--signal)] text-[var(--ink)] transition duration-300 group-hover:scale-110"><Play size={20} weight="fill" /></span>
      </span>
    </button>
  );
}
