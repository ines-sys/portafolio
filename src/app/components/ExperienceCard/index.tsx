import React from 'react';
import { IExperienceCard } from './types';
import Link from 'next/link';
import { IconExternal } from '../Icons';

const ExperienceCard = ({ dateRange, title, desc, tags, link, icon }: IExperienceCard) => {
  if (!title || !dateRange || !desc) return null;

  const content = (
    <>
      <div className="mb-3 flex flex-col gap-3">
        <div className="flex items-start gap-3">
          {icon && <span className="icon-badge mt-0.5 shrink-0">{icon}</span>}
          <div className="min-w-0 flex-1">
            <h3 className="font-display text-base font-bold leading-snug text-plum md:text-lg">
              {title}
            </h3>
            <p className="font-ui mt-2 text-xs font-semibold uppercase tracking-wider text-accent">
              {dateRange}
            </p>
          </div>
          {link && link !== '#' && (
            <IconExternal className="mt-1 h-4 w-4 shrink-0 text-accent opacity-50 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
          )}
        </div>
      </div>
      <p className="text-sm leading-relaxed text-muted">{desc}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <li className="tag-pill rounded-full px-3 py-1 text-[11px] font-medium" key={index}>
            {tag.title}
          </li>
        ))}
      </ul>
    </>
  );

  const className =
    'experience-card group block rounded-2xl border border-line bg-surface-strong/80 p-5 backdrop-blur-md md:p-6';

  if (link && link !== '#') {
    return (
      <Link href={link} target="_blank" rel="noopener noreferrer" className={className}>
        {content}
      </Link>
    );
  }

  return <div className={className}>{content}</div>;
};

export default ExperienceCard;
