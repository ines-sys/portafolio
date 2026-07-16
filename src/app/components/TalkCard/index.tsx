'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IconExternal } from '../Icons';

export type TalkMedia = {
  src: string;
  alt: string;
  type?: 'image' | 'video';
};

export type TalkCardProps = {
  title: string;
  meta: string;
  summary: string;
  eventHref: string;
  linkedinHref?: string;
  media?: TalkMedia[];
  eventLabel: string;
  linkedinLabel: string;
};

function TalkImage({ src, alt }: { src: string; alt: string }) {
  const [ok, setOk] = useState(true);
  if (!ok) return null;

  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      className="relative aspect-[4/3] overflow-hidden rounded-xl border border-line bg-surface"
    >
      <Image
        src={src}
        alt={alt}
        width={480}
        height={360}
        className="h-full w-full object-cover"
        onError={() => setOk(false)}
      />
    </a>
  );
}

export default function TalkCard({
  title,
  meta,
  summary,
  eventHref,
  linkedinHref,
  media = [],
  eventLabel,
  linkedinLabel,
}: TalkCardProps) {
  return (
    <article className="talk-card rounded-2xl border border-line bg-surface-strong/80 p-4 backdrop-blur-md md:p-5">
      <div className="mb-3 flex items-start gap-3">
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-sm font-bold text-plum md:text-base">{title}</h3>
          <p className="font-ui mt-1 text-[11px] text-muted">{meta}</p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-muted">{summary}</p>

      {media.length > 0 ? (
        <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {media.map((item) =>
            item.type === 'video' ? (
              <a
                key={item.src}
                href={item.src}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-line bg-surface"
              >
                <span className="font-ui text-[10px] font-bold uppercase tracking-wide text-accent">
                  Video
                </span>
                <IconExternal className="absolute right-2 top-2 h-3.5 w-3.5 text-accent opacity-70" />
              </a>
            ) : (
              <TalkImage key={item.src} src={item.src} alt={item.alt} />
            )
          )}
        </div>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          href={eventHref}
          target="_blank"
          rel="noopener noreferrer"
          className="font-ui inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-plum transition hover:border-accent hover:text-accent"
        >
          {eventLabel}
          <IconExternal className="h-3 w-3" />
        </Link>
        {linkedinHref && (
          <Link
            href={linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-ui inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-plum transition hover:border-accent hover:text-accent"
          >
            {linkedinLabel}
            <IconExternal className="h-3 w-3" />
          </Link>
        )}
      </div>
    </article>
  );
}
